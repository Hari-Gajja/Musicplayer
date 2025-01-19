const audio = document.getElementById('audio');
        const trackImg = document.getElementById('track-img');
        const trackTitle = document.getElementById('track-title');

        const folders = [
            {
                name: 'Hi nanna',
                tracks: [
                    { title: 'Adigaa',  src: 'songs/hi nanna/Adigaa.mp3', img: 'https://lyricsraag.com/wp-content/uploads/2024/01/Adigaa-Lyrics-Translation-Hi-Nanna.jpg' },
                    { title: 'Ammaadi',  src: 'songs/hi nanna/Ammaadi.mp3', img: 'https://i.scdn.co/image/ab67616d0000b273289a523dd1ad5c1d13fe01d6'},
                    { title: 'Asalelaa', src: 'songs/hi nanna/Asalelaa.mp3', img:'https://i.scdn.co/image/ab67616d0000b273ab23f0fba2fe563bc5544126' },
                    { title: 'Chedhu Nijam', src: 'songs/hi nanna/Chedhu Nijam.mp3', img:'https://telugulyricspot.com/wp-content/uploads/2024/03/chedu-e1710314304265.jpg' },
                    { title: 'Enno Enno',  src: 'songs/hi nanna/Enno Enno.mp3', img:'https://m.media-amazon.com/images/M/MV5BZmU4MzExZGQtYzUzZC00NGE2LTg5NTgtZWI3MWM4YzgyNWUxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
                    { title: 'Gaaju Bomma', src: 'songs/hi nanna/Gaaju Bomma.mp3', img:'https://i.scdn.co/image/ab67616d0000b273d117200dd34bd53abd37522f' },
                    { title: 'Idhe Idhe', src: 'songs/hi nanna/Idhe Idhe.mp3', img:'https://c.saavncdn.com/662/Idhe-Idhe-From-Hi-Nanna-Telugu-2023-20231206141002-500x500.jpg' },
                    { title: 'Needhe Needhe',  src: 'songs/hi nanna/Needhe Needhe.mp3', img:'https://pbs.twimg.com/media/F8O9ssKbMAAmmGn.jpg:large'},
                    { title: 'Odiyamma',  src: 'songs/hi nanna/Odiyamma.mp3', img:'https://i.scdn.co/image/ab67616d0000b273d84e64d1b61248cc16dc5efd' },
                    { title: 'Samayama', src: 'songs/hi nanna/Samayama.mp3', img:'https://i.scdn.co/image/ab67616d0000b273ea5a7ae393a3f8dfe6d53bb5' },
                ]
            },
            {
                name: 'Devara',
                tracks: [
                    { title: 'All hail', src: 'songs/devara/All Hail The Tiger.mp3', img: 'https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg' },
                    { title: 'Ayudha pooja', src: 'songs/devara/Ayudha Pooja.mp3', img: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8461e60919a7e5b3683a0d1c9f' },
                    { title: 'Chuttamalle', src: 'songs/devara/Chuttamalle.mp3', img: 'https://sensongsmp3.live/wp-content/uploads/2024/08/Devara-songs-download-2024-devara-mp3.jpg' },
                    { title: 'Daavudi', src: 'songs/devara/Daavudi.mp3', img: 'https://i.scdn.co/image/ab67616d0000b273c55f82e66732fdf3f600dce7' },
                    { title: 'Fear', src: 'songs/devara/Fear.mp3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8oboASCXOavahgwfO1voFYoknrLHQi092g&s' },
                    { title: 'Red sea', src: 'songs/devara/Red Sea.mp3', img: 'https://c.saavncdn.com/877/Red-Sea-From-Devara-Part-1-Telugu-2024-20240912181004-500x500.jpg' },
                ]
            },
            {
                name: 'Guntur Kaaram',
                tracks: [
                    { title: 'Amma', src: 'songs/gunturkaram/Amma.mp3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9crIz-LfDLLQRg_C5YtLMCrL-Atc2Etw0uw&s' },
                    { title: 'Dum Masala', src: 'songs/gunturkaram/Dum Masala.mp3', img: 'https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg' },
                    { title: 'Guntur kaaram', src: 'songs/gunturkaram/Guntur Kaaram.mp3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1ZV3R_1Ug5qcO9HTjoFiqRh8JAFCzF98UA&s' },
                    { title: 'Kurchi Madathapetti', src: 'songs/gunturkaram/Kurchi Madathapetti.mp3', img: 'https://i.scdn.co/image/ab67616d0000b2731b291d0933bd9890c1b354b7' },
                    { title: 'Mawa Enthaina', src: 'songs/gunturkaram/Mawaa Enthaina.mp3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-U32RixABdNY7vDckruZzjP8iXtAOoNl1Q&s' },
                    { title: 'Oh my baby', src: 'songs/gunturkaram/Oh My Baby.mp3', img: 'https://www.naasongs.to/wp-content/uploads/2023/12/Guntur-Kaaram-2023-Oh-My-Baby.jpg' },
                    { title: 'Ramana Aei', src: 'songs/gunturkaram/Ramana Aei.mp3', img: 'https://www.naasongs.to/wp-content/uploads/2024/01/Guntur-Kaaram-2023-Ramana-Aei.jpg' },
                ]
            },
            {
                name: 'Kalki',
                tracks: [
                    { title: 'Bhairava Anthem', src: 'songs/kalki/Bhairava Anthem.mp3', img: 'https://www.wsongs.co/wp-content/uploads/2023/07/Kalki-2898-AD-2024.jpg' },
                    { title: 'Bujji Theme', src: 'songs/kalki/Bujji Theme.mp3', img: 'https://a10.gaanacdn.com/gn_img/albums/R7vKXr6Wmr/vKXrnLE6Wm/size_m_1717407362.jpg' },
                    { title: 'Hope of Shambala', src: 'songs/kalki/Hope of Shambala.mp3', img: 'https://sensongsmp3.live/wp-content/uploads/2024/06/Kalki-2898-AD-songs-download.jpg' },
                    { title: 'Keshava Mahadev', src: 'songs/kalki/Keshava Madhava.mp3', img: 'https://s.saregama.tech/image/c/fw_485/8/4d/65/kalki_ost_ott_1440_1720535505.jpg' },
                    { title: 'Ta Takkara', src: 'songs/kalki/Ta Takkara.mp3', img: 'https://c.saavncdn.com/718/Ta-Takkara-Complex-Song-From-Kalki-2898-AD-Telugu-Telugu-2024-20240628113630-500x500.jpg' },
                    { title: 'Theme of Kalki', src: 'songs/kalki/Theme of Kalki.mp3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqke32Fn1h-lVkWIqYwME_djF7XWMWxpt4BQ&s' },
                ]
            },
            {
                name: 'Lucky Bhaskar',
                tracks: [
                    { title: 'Lucky Baskhar', src: 'songs/luckybhaskar/Lucky Baskhar.mp3', img: 'https://naasongs.com.se/uploads/album/lucky-baskhar-gv-prakash-kumar.webp' },
                    { title: 'Nijamaa Kalaa', src: 'songs/luckybhaskar/Nijamaa Kalaa.mp3', img: 'https://www.naasongs.co/wp-content/uploads/2024/11/Lucky-Baskhar-Telugu-2024-Nijamaa-Kalaa.jpg' },
                    { title: 'Srimathi Garu', src: 'songs/luckybhaskar/Srimathi Garu.mp3', img: 'https://i.scdn.co/image/ab67616d00001e02e719267835e27042f386738a' },
                ]
            },
            {
                name: 'Mechanic Rocky',
                tracks: [
                    { title: 'Gulledu Gulledu', src: 'songs/mechanic rocky/Gulledu Gulledu.mp3', img: 'https://sensongsmp3.live/wp-content/uploads/2024/08/Mechanic-Rocky-songs-download-2024.jpg' },
                    { title: 'I Hate U My Daddy', src: 'songs/mechanic rocky/I Hate U My Daddy.mp3', img: 'https://c.saavncdn.com/415/I-Hate-U-My-Daddy-From-Mechanic-Rocky-Telugu-2024-20241105165309-500x500.jpg' },
                    { title: 'Oo Pillo', src: 'songs/mechanic rocky/Oo Pillo.mp3', img: 'https://naasongs.com.co/wp-content/uploads/2024/09/Mechanic-Rocky-2024-Songs.jpg' },
                ]
            },
            {
                name: 'Pushpa 2',
                tracks: [
                    { title: 'Gango Renuka Thalli', src: 'songs/pushpa2/Gango Renuka Thalli.mp3', img: 'https://sensongs.co/wp-content/uploads/2023/04/Pushpa-2-2023-Songs.jpg' },
                    { title: 'Kissik', src: 'songs/pushpa2/Kissik.mp3', img: 'https://c.saavncdn.com/587/Kissik-From-Pushpa-2-The-Rule-Telugu-Telugu-2024-20241124192109-500x500.jpg' },
                    { title: 'Peelings', src: 'songs/pushpa2/Peelings.mp3', img: 'https://naasongs.com.co/wp-content/uploads/2024/12/Pushpa-2-Naa-Songs-Download-Pushpa-2-songs-allu-arjun-rashmika-mandana-sree-leela-devi-sri-prasad.jpg' },
                    { title: 'Pushpa Pushpa', src: 'songs/pushpa2/Pushpa Pushpa.mp3', img: 'https://c.saavncdn.com/601/Pushpa-Pushpa-From-Pushpa-2-The-Rule-Telugu-Telugu-2024-20240501161044-500x500.jpg' },
                    { title: 'Sooseki', src: 'songs/pushpa2/Sooseki.mp3', img: 'https://sensongsmp3.live/wp-content/uploads/2023/03/Pushpa-2-Mp3-Songs.jpg' },
                ]
            },
            {
                name: 'Salaar',
                tracks: [
                    { title: 'Aaru Sethulunnaa', src: 'songs/salaar/Aaru Sethulunnaa.mp3', img: '	https://i.scdn.co/image/ab67616d00001e02b90fa306daed94018119dc69' },
                    { title: 'Prathi Kadalo', src: 'songs/salaar/Prathi Kadalo.mp3', img: 'https://c.saavncdn.com/393/Prathi-Gaadhalo-From-Salaar-Cease-Fire-Telugu-Telugu-2023-20241120170223-500x500.jpg' },
                    { title: 'Sooreede', src: 'songs/salaar/Sooreede.mp3', img: 'https://c.saavncdn.com/205/Sooreede-From-Salaar-Cease-Fire-Telugu-Telugu-2023-20241107224711-500x500.jpg' },
                    { title: 'Sound of Salaar', src: 'songs/salaar/Sound of Salaar.mp3', img: 'https://c.saavncdn.com/610/Sound-of-Salaar-From-Salaar-Cease-Fire-Telugu-2023-20241108194854-500x500.jpg' },
                    { title: 'Vinaraa', src: 'songs/salaar/Vinaraa.mp3', img: 'https://c.saavncdn.com/862/Vinaraa-From-Salaar-Cease-Fire-Telugu-Telugu-2023-20241108134605-500x500.jpg' },
                ]
            },
            {
                name: 'Saripodha Sanivaaram',
                tracks: [
                    { title: 'Bhaga Bhaga', src: 'songs/saripodha/Bhaga Bhaga.mp3', img: 'https://preview.redd.it/saripodhaa-sanivaaram-2024-review-discussion-thread-v0-bq0vdfja2hid1.jpg?width=1080&crop=smart&auto=webp&s=95b2144b54907603b78c20024fb43631e4a449d2' },
                    { title: 'Garam Garam', src: 'songs/saripodha/Garam Garam.mp3', img: 'https://www.naasongs.to/wp-content/uploads/2024/06/Saripodhaa-Sanivaaram-2024-Garam-Garam.jpg' },
                    { title: 'Shiva Thandavame', src: 'songs/saripodha/Shiva Thandavame.mp3', img: 'https://c.saavncdn.com/143/Shiva-Thandavame-Trailer-Theme-From-Saripodhaa-Sanivaaram-Telugu-2024-20240814174522-500x500.jpg' },
                    { title: 'Ullaasam', src: 'songs/saripodha/Ullaasam.mp3', img: 'https://c.saavncdn.com/202/Ullaasam-From-Saripodhaa-Sanivaaram-Telugu-2024-20240713210333-500x500.jpg' },
                ]
            },
            {
                name: 'Tillu 2',
                tracks: [
                    { title: 'Dj Tillu Revamp', src: 'songs/tillu2/Dj Tillu Revamp.mp3', img: 'https://naasongs.cc/wp-content/uploads/2024/01/Tillu-Square-Official-Image.png' },
                    { title: 'Oh My Lilly', src: 'songs/tillu2/Oh My Lilly.mp3', img: 'https://c5.saavncdn.com/000/Tillu-Square-Telugu-2023-20240405190047-500x500.jpgdata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…/0V1dVni+5F5fsb7m9v2/GrH+M+o/Curq9BHmsnXV1dWgH//Z' },
                    { title: 'Radhika', src: 'songs/tillu2/Radhika.mp3', img: 'https://naasongs.com.co/wp-content/uploads/2023/11/Tillu-Square2023.jpg' },
                    { title: 'Ticket Eh Konakunda', src: 'songs/tillu2/Ticket Eh Konakunda.mp3', img: 'http://andhraboxoffice.com/uploads/F18m5tUaAAEJZS4.jpg' },
                ]
            }
        ];

        let currentTrackIndex = 0;
        let currentFolderIndex = 0;

        function loadTrack(folderIndex, trackIndex) {
            const track = folders[folderIndex].tracks[trackIndex];
            audio.src = track.src;
            trackImg.src = track.img;
            trackTitle.textContent = track.title;
            audio.load();
        }

        function playPause() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }

        function nextTrack() {
            currentTrackIndex++;
            if (currentTrackIndex >= folders[currentFolderIndex].tracks.length) {
                currentTrackIndex = 0;
                currentFolderIndex = (currentFolderIndex + 1) % folders.length;
            }
            loadTrack(currentFolderIndex, currentTrackIndex);
            audio.play();
        }

        function prevTrack() {
            currentTrackIndex--;
            if (currentTrackIndex < 0) {
                currentFolderIndex = (currentFolderIndex - 1 + folders.length) % folders.length;
                currentTrackIndex = folders[currentFolderIndex].tracks.length - 1;
            }
            loadTrack(currentFolderIndex, currentTrackIndex);
            audio.play();
        }

        function createPlaylist() {
            const foldersDiv = document.getElementById('folders');
            folders.forEach((folder, folderIndex) => {
                const folderDiv = document.createElement('div');
                folderDiv.className = 'folder';
                const folderTitle = document.createElement('h4');
                folderTitle.textContent = folder.name;
                folderDiv.appendChild(folderTitle);

                const ul = document.createElement('ul');
                folder.tracks.forEach((track, trackIndex) => {
                    const li = document.createElement('li');
                    li.textContent = `${track.title}`;
                    li.onclick = () => {
                        currentFolderIndex = folderIndex;
                        currentTrackIndex = trackIndex;
                        loadTrack(currentFolderIndex, currentTrackIndex);
                        audio.play();
                    };
                    ul.appendChild(li);
                });

                folderDiv.appendChild(ul);
                foldersDiv.appendChild(folderDiv);
            });
        }

        // Load the first track initially
        loadTrack(currentFolderIndex, currentTrackIndex);
        createPlaylist();