import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'The Long and Winding Road', duration: '3:38' },
        { title: 'Something', duration: '3:02'},
        { title: 'In My Life', duration: '2:26'},
        { title: 'Yesterday', duration: '2:06'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});