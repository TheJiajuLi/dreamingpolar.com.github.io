import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { FiUpload, FiMusic, FiImage, FiX, FiCheckCircle } from "react-icons/fi";
import { CommunityStorage, CommunityTrack } from "../../utils/CommunityStorage";
import { genreColors } from "../../data/colorSchemes";
import { generateUniqueId } from "../../utils/idGenerator";
import { useNavigate } from "react-router-dom";
import { coverArt, albumCovers, artistCovers } from '../../data/coverArtData';

interface UploadState {
  files: File[];
  currentFileIndex: number;
  uploading: boolean;
  progress: number;
  success: boolean;
  error: string | null;
}

const CommunityUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState<UploadState>({
    files: [],
    currentFileIndex: 0,
    uploading: false,
    progress: 0,
    success: false,
    error: null,
  });

  const [formData, setFormData] = useState<Partial<CommunityTrack>>({
    title: "",
    artist: "",
    album: "",
    genre: "pop",
    isOriginal: false,
  });

  const [coverArtFile, setCoverArtFile] = useState<File | null>(null);
  const [coverArtPreview, setCoverArtPreview] = useState<string>("");
  const [coverArtSearch, setCoverArtSearch] = useState<string>("");
  const [selectedExistingCover, setSelectedExistingCover] =
    useState<string>("");

  const audioFileInputRef = useRef<HTMLInputElement>(null);
  const coverArtInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection for music files
  const handleAudioFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFiles = Array.from(event.target.files);
      setUploadState({
        ...uploadState,
        files: selectedFiles,
        currentFileIndex: 0,
        error: null,
      });
    }
  };

  // Handle file selection for cover art
  const handleCoverArtSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setCoverArtFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          setCoverArtPreview(result);
          setSelectedExistingCover(""); // Clear selected existing cover
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Function to search existing cover art
  const searchExistingCoverArt = () => {
    const allCovers: Record<string, string> = {
      ...coverArt,
      ...albumCovers,
      ...artistCovers,
    };

    return Object.entries(allCovers)
      .filter(([key]) =>
        key.toLowerCase().includes(coverArtSearch.toLowerCase())
      )
      .map(([key, value]) => ({
        key,
        value,
      }));
  };

  // Handle selection of existing cover art
  const handleSelectExistingCover = (coverUrl: string) => {
    setSelectedExistingCover(coverUrl);
    setCoverArtPreview("");
    setCoverArtFile(null);
  };

  // Upload all files
  const handleUpload = async () => {
    if (uploadState.files.length === 0) {
      setUploadState({
        ...uploadState,
        error: "Please select at least one audio file",
      });
      return;
    }

    if (!formData.title || !formData.artist) {
      setUploadState({
        ...uploadState,
        error: "Title and artist are required",
      });
      return;
    }

    if (!coverArtPreview && !selectedExistingCover) {
      setUploadState({
        ...uploadState,
        error: "Please select or upload cover art",
      });
      return;
    }

    // Start upload process
    setUploadState({
      ...uploadState,
      uploading: true,
      progress: 0,
      error: null,
    });

    try {
      const currentFile = uploadState.files[uploadState.currentFileIndex];

      // Simulate audio file upload
      const audioSrc = await CommunityStorage.uploadAudioFile(currentFile);

      // Determine cover art URL
      let coverArtUrl = selectedExistingCover;
      if (coverArtFile && !selectedExistingCover) {
        coverArtUrl = await CommunityStorage.uploadCoverArt(coverArtFile);
      }

      // Create track object
      const track: CommunityTrack = {
        id: `community-${generateUniqueId()}`,
        title: formData.title || currentFile.name.replace(/\.[^/.]+$/, ""),
        artist: formData.artist || "Unknown Artist",
        album: formData.album || "Community Uploads",
        genre: formData.genre || "pop",
        coverArt: coverArtUrl,
        audioSrc: audioSrc,
        duration: 0, // We'll update this when the audio loads
        color:
          genreColors[formData.genre as keyof typeof genreColors] ||
          genreColors.pop,
        uploadedBy: "Current User", // In a real app, get this from authentication
        uploadDate: new Date().toISOString(),
        isOriginal: formData.isOriginal || false,
      };

      // Save track to storage
      CommunityStorage.saveTrack(track);

      // Update progress and check if more files to upload
      const newIndex = uploadState.currentFileIndex + 1;
      if (newIndex < uploadState.files.length) {
        setUploadState({
          ...uploadState,
          currentFileIndex: newIndex,
          progress: (newIndex / uploadState.files.length) * 100,
        });
      } else {
        // All done
        setUploadState({
          ...uploadState,
          uploading: false,
          success: true,
          progress: 100,
        });
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadState({
        ...uploadState,
        uploading: false,
        error: "Upload failed. Please try again.",
      });
    }
  };

  // Get filtered cover art options
  const filteredCoverArt = coverArtSearch ? searchExistingCoverArt() : [];

  return (
    <>
      <GlobalStyle />
      <PageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <Title>Upload to Community</Title>
          <CloseButton
            onClick={() => navigate("/explorer")}
            aria-label="Close upload page"
          >
            <FiX size={24} />
          </CloseButton>
        </Header>

        <Content>
          <UploadSection>
            <SectionTitle>Select Audio Files</SectionTitle>
            <FileSelectButton
              onClick={() => audioFileInputRef.current?.click()}
              disabled={uploadState.uploading}
              aria-label="Select music files to upload"
            >
              <FiMusic size={20} aria-hidden="true" />
              Select Music Files
            </FileSelectButton>
            <input
              type="file"
              ref={audioFileInputRef}
              onChange={handleAudioFileSelect}
              accept="audio/*"
              multiple
              style={{ display: "none" }}
              aria-label="File input for audio files"
            />

            {uploadState.files.length > 0 && (
              <FileList aria-label="Selected files list">
                {uploadState.files.map((file, index) => (
                  <FileItem
                    key={index}
                    $active={index === uploadState.currentFileIndex}
                  >
                    <FiMusic size={16} aria-hidden="true" />
                    <FileName>{file.name}</FileName>
                    <FileSize>
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </FileSize>
                  </FileItem>
                ))}
              </FileList>
            )}
          </UploadSection>

          <InfoSection>
            <SectionTitle>Track Information</SectionTitle>

            <FormGroup>
              <Label htmlFor="title">Title*</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Track title"
                disabled={uploadState.uploading}
                required
                aria-required="true"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="artist">Artist*</Label>
              <Input
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleInputChange}
                placeholder="Artist name"
                disabled={uploadState.uploading}
                required
                aria-required="true"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="album">Album</Label>
              <Input
                id="album"
                name="album"
                value={formData.album}
                onChange={handleInputChange}
                placeholder="Album name"
                disabled={uploadState.uploading}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="genre" id="genre-label">Genre</Label>
              <Select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                disabled={uploadState.uploading}
                aria-labelledby="genre-label"
                aria-label="Select music genre"
                title="Music genre"
              >
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="classical">Classical</option>
                <option value="electronic">Electronic</option>
                <option value="hiphop">Hip Hop</option>
                <option value="jazz">Jazz</option>
                <option value="blues">Blues</option>
                <option value="country">Country</option>
                <option value="folk">Folk</option>
                <option value="ambient">Ambient</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <CheckboxLabel htmlFor="isOriginal">
                <Checkbox
                  id="isOriginal"
                  type="checkbox"
                  name="isOriginal"
                  checked={formData.isOriginal}
                  onChange={handleInputChange}
                  disabled={uploadState.uploading}
                  aria-label="Mark as original content"
                />
                <span>This is my original content</span>
              </CheckboxLabel>
            </FormGroup>
          </InfoSection>

          <CoverArtSection>
            <SectionTitle>Cover Art</SectionTitle>

            <CoverArtPreviewContainer>
              {coverArtPreview ? (
                <CoverArtPreviewImage
                  src={coverArtPreview}
                  alt="Cover Art Preview"
                />
              ) : selectedExistingCover ? (
                <CoverArtPreviewImage
                  src={selectedExistingCover}
                  alt="Selected Cover Art"
                />
              ) : (
                <CoverArtPlaceholder>
                  <FiImage size={48} aria-hidden="true" />
                  <span className="sr-only">No cover art selected</span>
                </CoverArtPlaceholder>
              )}
            </CoverArtPreviewContainer>

            <CoverArtOptions>
              <CoverArtButton
                onClick={() => coverArtInputRef.current?.click()}
                disabled={uploadState.uploading}
                aria-label="Upload cover art"
              >
                <FiUpload size={16} aria-hidden="true" />
                Upload Cover
              </CoverArtButton>
              <input
                type="file"
                ref={coverArtInputRef}
                onChange={handleCoverArtSelect}
                accept="image/*"
                style={{ display: "none" }}
                aria-label="File input for cover art"
              />

              <FormGroup>
                <Label htmlFor="coverSearch">Or search existing covers:</Label>
                <Input
                  id="coverSearch"
                  value={coverArtSearch}
                  onChange={(e) => setCoverArtSearch(e.target.value)}
                  placeholder="Search by artist or album"
                  disabled={uploadState.uploading}
                  aria-label="Search existing cover art"
                />
              </FormGroup>

              {coverArtSearch && (
                <ExistingCoverGrid aria-label="Cover art search results">
                  {filteredCoverArt.map((cover) => (
                    <ExistingCoverItem
                      key={cover.key}
                      onClick={() => handleSelectExistingCover(cover.value)}
                      $selected={selectedExistingCover === cover.value}
                      role="button"
                      aria-label={`Select ${cover.key} cover art`}
                      aria-pressed={selectedExistingCover === cover.value}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleSelectExistingCover(cover.value);
                          e.preventDefault();
                        }
                      }}
                    >
                      <img src={cover.value} alt={`${cover.key} cover`} />
                      <span>{cover.key}</span>
                    </ExistingCoverItem>
                  ))}
                  {filteredCoverArt.length === 0 && (
                    <p>No covers found. Try a different search term.</p>
                  )}
                </ExistingCoverGrid>
              )}
            </CoverArtOptions>
          </CoverArtSection>
        </Content>

        <UploadButtonContainer>
          {uploadState.error && (
            <ErrorMessage role="alert">{uploadState.error}</ErrorMessage>
          )}

          {uploadState.success ? (
            <SuccessMessage role="status">
              <FiCheckCircle size={20} aria-hidden="true" />
              Upload complete! Your tracks have been added to the community
              library.
            </SuccessMessage>
          ) : (
            <UploadButton
              onClick={handleUpload}
              disabled={uploadState.uploading || uploadState.files.length === 0}
              aria-label="Upload tracks to community"
            >
              {uploadState.uploading ? (
                <>
                  <ProgressBar
                    $progress={uploadState.progress}
                    aria-hidden="true"
                  />
                  <span>Uploading... {Math.round(uploadState.progress)}%</span>
                </>
              ) : (
                <>
                  <FiUpload size={20} aria-hidden="true" />
                  Upload to Community
                </>
              )}
            </UploadButton>
          )}

          {uploadState.success && (
            <BackButton
              onClick={() => navigate("/explorer")}
              aria-label="Go back to music explorer"
            >
              Go to Music Explorer
            </BackButton>
          )}
        </UploadButtonContainer>
      </PageContainer>
    </>
  );
};

// Add screen reader only class
const GlobalStyle = createGlobalStyle`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

// Styled Components
const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.background?.primary || "#1a1a1a"};
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid
    ${({ theme }) => theme.background?.tertiary || "#333"};
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text?.secondary || "#aaaaaa"};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background?.hover || "rgba(255,255,255,0.1)"};
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const UploadSection = styled.section`
  background-color: ${({ theme }) => theme.background?.secondary || "#222"};
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const InfoSection = styled.section`
  background-color: ${({ theme }) => theme.background?.secondary || "#222"};
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const CoverArtSection = styled.section`
  background-color: ${({ theme }) => theme.background?.secondary || "#222"};
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const FileSelectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.accent?.primary || "#4a6cf7"};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.accent?.secondary || "#3a5ce7"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  max-height: 300px;
  overflow-y: auto;
`;

const FileItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme, $active }) =>
    $active
      ? theme.background?.hover || "rgba(255,255,255,0.1)"
      : "rgba(255, 255, 255, 0.05)"};
  border-radius: 0.25rem;
`;

const FileName = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FileSize = styled.span`
  color: ${({ theme }) => theme.text?.secondary || "#aaaaaa"};
  font-size: 0.875rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text?.secondary || "#aaaaaa"};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.background?.tertiary || "#333"};
  border: 1px solid ${({ theme }) => theme.background?.tertiary || "#444"};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent?.primary || "#4a6cf7"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.background?.tertiary || "#333"};
  border: 1px solid ${({ theme }) => theme.background?.tertiary || "#444"};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent?.primary || "#4a6cf7"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const CoverArtPreviewContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.background?.tertiary || "#333"};
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoverArtPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CoverArtPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text?.secondary || "#aaaaaa"};
`;

const CoverArtOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CoverArtButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.background?.tertiary || "#333"};
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  border: 1px solid ${({ theme }) => theme.background?.tertiary || "#444"};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.background?.hover || "rgba(255,255,255,0.1)"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ExistingCoverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.5rem;
`;

const ExistingCoverItem = styled.div<{ $selected: boolean }>`
  cursor: pointer;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 2px solid
    ${({ theme, $selected }) =>
      $selected ? theme.accent?.primary || "#4a6cf7" : "transparent"};

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }

  span {
    display: block;
    font-size: 0.75rem;
    padding: 0.25rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.background?.hover || "rgba(255,255,255,0.1)"};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.accent?.primary || "#4a6cf7"};
    outline-offset: 2px;
  }
`;

const UploadButtonContainer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.background?.tertiary || "#333"};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.accent?.primary || "#4a6cf7"};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.accent?.secondary || "#3a5ce7"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 0;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.alert?.error || "#ef4444"};
  background-color: ${({ theme }) =>
    theme.alert?.errorBg || "rgba(239, 68, 68, 0.1)"};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.alert?.success || "#10b981"};
  background-color: ${({ theme }) =>
    theme.alert?.successBg || "rgba(16, 185, 129, 0.1)"};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`;

const BackButton = styled.button`
  background-color: ${({ theme }) => theme.background?.tertiary || "#333"};
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  border: 1px solid ${({ theme }) => theme.background?.tertiary || "#444"};
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background?.hover || "rgba(255,255,255,0.1)"};
  }
`;

export default CommunityUploadPage;
