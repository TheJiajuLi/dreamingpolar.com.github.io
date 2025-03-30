// src/utils/CommunityStorage.ts
import { genreColors } from '../data/colorSchemes';
import { Track, GenreType } from '../types/music';

export interface CommunityTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: GenreType;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color: string;
  uploadedBy: string;
  uploadDate: string;
  isOriginal: boolean;
}

const COMMUNITY_TRACKS_KEY = 'dreaming_polar_community_tracks';

export const CommunityStorage = {
  // Add a helper method to get genre color
  getGenreColor: (genre: GenreType): string => {
    return genreColors[genre] || '#333333'; // Default color if genre not found
  },

  saveTrack: (track: CommunityTrack): void => {
    try {
      // Ensure track has a color based on its genre
      const trackWithColor = {
        ...track,
        color: track.color || CommunityStorage.getGenreColor(track.genre)
      };

      // Get existing tracks
      const existingTracksJson = localStorage.getItem(COMMUNITY_TRACKS_KEY);
      const existingTracks: CommunityTrack[] = existingTracksJson 
        ? JSON.parse(existingTracksJson) 
        : [];
      
      // Add new track
      const updatedTracks = [...existingTracks, trackWithColor];
      
      // Save back to localStorage
      localStorage.setItem(COMMUNITY_TRACKS_KEY, JSON.stringify(updatedTracks));
      
      // Dispatch an event to notify the app
      const event = new CustomEvent('community-track-added', { 
        detail: trackWithColor 
      });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Error saving community track:', error);
    }
  },
  
  getAllTracks: (): CommunityTrack[] => {
    try {
      const tracksJson = localStorage.getItem(COMMUNITY_TRACKS_KEY);
      return tracksJson ? JSON.parse(tracksJson) : [];
    } catch (error) {
      console.error('Error retrieving community tracks:', error);
      return [];
    }
  },
  
  getTrackById: (id: string): CommunityTrack | null => {
    try {
      const tracks = CommunityStorage.getAllTracks();
      return tracks.find(track => track.id === id) || null;
    } catch (error) {
      console.error('Error retrieving community track:', error);
      return null;
    }
  },
  
  // Convert CommunityTrack to Track for the player
  convertToTrack: (communityTrack: CommunityTrack): Track => {
    return {
      id: communityTrack.id,
      title: communityTrack.title,
      artist: communityTrack.artist,
      album: communityTrack.album,
      genre: communityTrack.genre,
      coverArt: communityTrack.coverArt,
      audioSrc: communityTrack.audioSrc,
      duration: communityTrack.duration,
      color: communityTrack.color || CommunityStorage.getGenreColor(communityTrack.genre)
    };
  },
  
  // Simulate file uploads by creating object URLs
  uploadAudioFile: (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const audioUrl = URL.createObjectURL(file);
        resolve(audioUrl);
      }, 1500); // Simulate upload delay
    });
  },
  
  uploadCoverArt: (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const coverUrl = URL.createObjectURL(file);
        resolve(coverUrl);
      }, 1000); // Simulate upload delay
    });
  }
};