import {playerStoreReducer, setCurrentTime, setNewStateIsFullScreen, setNewStateIsPlaying} from './player-store.reducer';
import {changeGenreAction, filmListStore} from '../film-list/film-list.reducer';

const initialPlayerStoreReducerState = {
  isPlaying: false,
  isFullScreen: false,
  currentToggler: 0,
  timeLeft: '00:00:00'
};

describe('Reducer: player-store', () => {
  it('without additional parameters should return initial state', () => {
    expect(playerStoreReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialPlayerStoreReducerState);
  });

  it('should change isPlaying on true', () => {
    expect(playerStoreReducer.reducer(initialPlayerStoreReducerState, setNewStateIsPlaying(true)))
      .toEqual({
        isPlaying: true,
        isFullScreen: false,
        currentToggler: 0,
        timeLeft: '00:00:00'
      });
  });

  it('should change isFullScreen on true', () => {
    expect(playerStoreReducer.reducer(initialPlayerStoreReducerState, setNewStateIsFullScreen()))
      .toEqual({
        isPlaying: false,
        isFullScreen: true,
        currentToggler: 0,
        timeLeft: '00:00:00'
      });
  });

  describe('action on current time', () => {
    it('LESS THEN 1 MINUTE should right change time left with 29.437108', () => {
      let currentValueTime = '0';
      const timeLeft = 29.437108;
      const timeRound = Math.round(timeLeft);
      const s = (timeRound % 60).toString();
      const m = Math.round(timeRound / 60 % 60).toString();
      currentValueTime = `${m.padStart(2, '0')}:${s.padStart(2, '0')}`;

      expect(playerStoreReducer.reducer(initialPlayerStoreReducerState, setCurrentTime({
        currentToggler: 2.623508941389736,
        timeLeft: timeLeft
      })))
        .toEqual({
          isPlaying: false,
          isFullScreen: false,
          currentToggler: 2.623508941389736,
          timeLeft: currentValueTime
        });
    });

    it('MORE THEN 1 MINUTE should right change time left with 62.437108', () => {
      let currentValueTime = '0';
      const timeLeft = 62.437108;
      const timeRound = Math.round(timeLeft);
      const s = (timeRound % 60).toString();
      const m = Math.round(timeRound / 60 % 60).toString();
      currentValueTime = `${m.padStart(2, '0')}:${s.padStart(2, '0')}`;

      expect(playerStoreReducer.reducer(initialPlayerStoreReducerState, setCurrentTime({
        currentToggler: 2.623508941389736,
        timeLeft: timeLeft
      })))
        .toEqual({
          isPlaying: false,
          isFullScreen: false,
          currentToggler: 2.623508941389736,
          timeLeft: currentValueTime
        });
    });

    it('MORE THEN 1 HOUR should right change time left with 3602.437108', () => {
      let currentValueTime = '0';
      const timeLeft = 3602.437108;
      const timeRound = Math.round(timeLeft);
      const s = (timeRound % 60).toString();
      const m = Math.round(timeRound / 60 % 60).toString();
      const h = Math.round(timeRound / 60 / 60 % 60).toString();
      currentValueTime = `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;

      expect(playerStoreReducer.reducer(initialPlayerStoreReducerState, setCurrentTime({
        currentToggler: 2.623508941389736,
        timeLeft: timeLeft
      })))
        .toEqual({
          isPlaying: false,
          isFullScreen: false,
          currentToggler: 2.623508941389736,
          timeLeft: currentValueTime
        });
    });
  });
});
