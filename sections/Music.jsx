'use client';
import React, { useState, useRef } from 'react';
import { songs } from '@/Songs/List';

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.oncanplaythrough = () => {
      audioRef.current.play();
      setIsPlaying(true);
    };
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentSong.url;
    link.download = currentSong.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-w-[300px] md:min-w-[400px] min-h-[100px] mx-auto gap-2 shadow-md px-3 bg-player bg-white/70 rounded-md flex flex-col border border-gold text-black">
      <div className="flex gap-4">
        <button onClick={handlePlayPause} className="">
          {isPlaying ? (
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[150px] xl:h-[200px]"
                viewBox="0 0 512 512"
              >
                <path
                  style={{ fill: 'white' }}
                  d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256c141.158,0,256-114.842,256-256S397.158,0,256,0z"
                />
                <path
                  style={{ fill: 'white' }}
                  d="M256,0v512c141.158,0,256-114.842,256-256S397.158,0,256,0z"
                />
                <path
                  style={{ fill: '#D4AF37' }}
                  d="M318.061,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273
                c12.851,0,23.273-10.42,23.273-23.273V162.909C341.333,150.056,330.912,139.636,318.061,139.636z"
                />
                <path
                  style={{ fill: '#D4AF37' }}
                  d="M193.939,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273
                c12.851,0,23.273-10.42,23.273-23.273V162.909C217.212,150.056,206.791,139.636,193.939,139.636z"
                />
              </svg>
            </div>
          ) : (
            <div>
              <button className="play animate-pulse">
                <svg
                  version="1.1"
                  id="Capa_1 c"
                  className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] lg:w-[150px] xl:h-[200px]"
                  viewBox="0 0 58 58"
                >
                  <circle style={{ fill: '#D4AF37' }} cx="29" cy="29" r="29" />
                  <g>
                    <polygon
                      style={{ fill: '#FFFFFF' }}
                      points="44,29 22,44 22,29.273 22,14 	"
                    />
                    <path
                      style={{ fill: '#FFFFFF' }}
                      d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                    c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                    l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          )}
        </button>
        <div className="flex justify-center items-center mt-1 flex-grow">
          <div className="w-full bg-white px-4 py-2 space-y-1 md:space-y-3 rounded-md">
            {isPlaying ? (
              <p className="text-xs md:text-base">Now Playing</p>
            ) : (
              <p className="text-xs md:text-base">Play Now</p>
            )}
          <div className='bg-gold px-2 py-1 w-[200px]'>
          <h1 className="w-[90%] text-xs md:text-base rounded-md overflow-hidden text-ellipsis whitespace-nowrap">
  {currentSong.title}
</h1>
          </div>
          <div className='flex gap-2' >
          <p className='text-[10px] text-gray-600'>By:</p>
          <p className='text-black text-sm'>{currentSong.artiste}</p>
          </div>
       


            <audio ref={audioRef} className="">
              <source src={currentSong.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex justify-end">
              <button
                onClick={handleDownload}
                className="flex gap-2 items-center bg-black/40 px-4 py-2 rounded-md"
              >
                <p className="text-xs">Download</p>
                <svg
                  className="w-[12px] h-[12px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                    fill="#1C274C"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full col-span-3 bg-black/50 rounded-md p-2 max-h-40 overflow-y-scroll my-4 ">
        <ul className="space-y-1">
          {songs.map((song, index) => (
            <li
              key={index}
              onClick={() => handleSongSelect(song)}
              className="bg-white/90 px-2 py-1 text-xs md:text-base rounded-sm cursor-pointer flex justify-between items-center"
            >
              <p>{song.title}</p>
              <div className='max-sm:my-1'>
              {currentSong.title === song.title && isPlaying? (
            <div >
              <svg
                version="1.1"
                id="Capa_1"
                className="w-4 h-4"
                viewBox="0 0 512 512"
              >
                <path
                  style={{ fill: 'white' }}
                  d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256c141.158,0,256-114.842,256-256S397.158,0,256,0z"
                />
                <path
                  style={{ fill: 'white' }}
                  d="M256,0v512c141.158,0,256-114.842,256-256S397.158,0,256,0z"
                />
                <path
                  style={{ fill: '#D4AF37' }}
                  d="M318.061,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273
                c12.851,0,23.273-10.42,23.273-23.273V162.909C341.333,150.056,330.912,139.636,318.061,139.636z"
                />
                <path
                  style={{ fill: '#D4AF37' }}
                  d="M193.939,139.636c-12.853,0-23.273,10.42-23.273,23.273v186.182c0,12.853,10.42,23.273,23.273,23.273
                c12.851,0,23.273-10.42,23.273-23.273V162.909C217.212,150.056,206.791,139.636,193.939,139.636z"
                />
              </svg>
            </div>
          ) : (
            <div>
              <button className=" ">
                <svg
                  version="1.1"
                  id="Capa_1 c"
                  className="w-4 h-4"
                  viewBox="0 0 58 58"
                >
                  <circle style={{ fill: '#D4AF37' }} cx="29" cy="29" r="29" />
                  <g>
                    <polygon
                      style={{ fill: '#FFFFFF' }}
                      points="44,29 22,44 22,29.273 22,14 	"
                    />
                    <path
                      style={{ fill: '#FFFFFF' }}
                      d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
                    c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
                    l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicPlayer;
