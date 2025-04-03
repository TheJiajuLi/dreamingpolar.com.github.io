// src/utils/CommunityStorage.ts
import { genreColors } from '../data/colorSchemes';
import { Track, GenreType } from '../types/music';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { storage, db } from '../firebase/config';

export interface CommunityTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color: string;
  uploadedBy: string;
  uploadDate: string;
  isOriginal: boolean;
}

export class CommunityStorage {
  // Add a helper method to get genre color
  static getGenreColor(genre: GenreType): string {
    return genreColors[genre] || '#333333'; // Default color if genre not found
  }

  static async uploadAudioFile(file: File): Promise<string> {
    try {
      // Create a storage reference with a unique name
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name.replace(/\s+/g, '_')}`;
      const storageRef = ref(storage, `audio/${fileName}`);
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading audio file:", error);
      throw new Error("Failed to upload audio file");
    }
  }

  static async uploadCoverArt(file: File): Promise<string> {
    try {
      // Create a storage reference
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name.replace(/\s+/g, '_')}`;
      const storageRef = ref(storage, `covers/${fileName}`);
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading cover art:", error);
      throw new Error("Failed to upload cover art");
    }
  }

  static async saveTrack(track: CommunityTrack): Promise<void> {
    try {
      // Save track metadata to Firestore
      await addDoc(collection(db, "communityTracks"), track);
    } catch (error) {
      console.error("Error saving track:", error);
      throw new Error("Failed to save track metadata");
    }
  }

  static async getAllTracks(): Promise<CommunityTrack[]> {
    try {
      // Get all tracks from Firestore, ordered by upload date
      const q = query(collection(db, "communityTracks"), orderBy("uploadDate", "desc"));
      const querySnapshot = await getDocs(q);
      
      const tracks: CommunityTrack[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as CommunityTrack;
        tracks.push(data);
      });
      
      return tracks;
    } catch (error) {
      console.error("Error getting tracks:", error);
      return [];
    }
  }

  static convertToTrack(communityTrack: CommunityTrack): Track {
    return {
      id: communityTrack.id,
      title: communityTrack.title,
      artist: communityTrack.artist,
      album: communityTrack.album,
      genre: communityTrack.genre as GenreType,
      coverArt: communityTrack.coverArt,
      audioSrc: communityTrack.audioSrc,
      duration: communityTrack.duration,
      color: communityTrack.color || CommunityStorage.getGenreColor(communityTrack.genre as GenreType)
    };
  }
}