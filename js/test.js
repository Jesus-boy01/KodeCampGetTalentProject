// Current Working Filter

let currentFilter = document.querySelector(".current-filter");
let trackName = document.querySelectorAll(".track-name");
let locationName = document.querySelectorAll(".location-name");

let search = document.getElementById("search");

search.addEventListener('click', locationFilter);
search.addEventListener('click', trackFilter);

function trackFilter() {
    trackName.forEach(track => {
        let userSelect = document.getElementById("user-select").value;
        let trackValue = track.innerText;
        if (trackValue === userSelect) {
            currentFilter.innerHTML = trackValue;
            track.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            track.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    })
}

function locationFilter() {
    locationName.forEach(location => {
        let locationSelect = document.getElementById("location-select").value;
        let locationValue = location.innerText;
        let locationCountry = locationValue.split(", ")[1];
        if (locationCountry === locationSelect) {
            location.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            location.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    })
}














// let currentFilter = document.querySelector(".current-filter");
// let recruitInfo = document.querySelectorAll(".recruit-info");
// let locationName = document.querySelectorAll(".location-name");
// let search = document.getElementById("search");
// let userSelect = document.getElementById("user-select");
// let locationSelect = document.getElementById("location-select");
// let countries = document.querySelectorAll(".countries")


// recruitInfo.forEach(track => {
//     search.addEventListener('click', selectedValue);

//     let trackValue = track.innerText;
//     function selectedValue() {
//         if (!(onchange)) {
//             let userTrack = userSelect.value
//             if (userTrack !== "Career") {
//                 currentFilter.innerText = userTrack;
//             }
//             let userLocation = locationSelect.value;
//             const recruitFilter = {
//                 user: userTrack,
//                 location: userLocation
//             }

//             trackRecruitFilter(recruitFilter);
//             locationRecruitFilter(recruitFilter);
//         }
//     }

//     function trackRecruitFilter(obj) {
//         for (let i in obj) {
//             if (i === "user") {
//                 if (trackValue === obj[i]) {
//                     track.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
//                 } else {
//                     track.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
//                 }
//             }
//         }
//     }
// })

// function locationRecruitFilter(obj) {
//     for (let j in obj) {
//         if (j === "location") {
//             countries.forEach(country => {
//                 let userCountry = country.innerText;
//                 if (userCountry === obj[j]) {
//                     country.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
//                 } else {
//                     country.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "false";
//                 }
//             })
//         }
//     }
// }

// // location.parentElement.parentElement.parentElement.parentElement.style.display = 'block';

// // location.parentElement.parentElement.parentElement.parentElement.style.display = 'none';

// // console.log(recruitInfo);

// // trackName.forEach(track => {
// //     search.addEventListener('click', function () {
// //         let userSelect= document.getElementById("user-select").value;
// //         let trackValue = track.innerText;
// //         if (trackValue === userSelect) {
// //             track.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
// //             trackArray.unshift(track.parentElement.parentElement.parentElement.parentElement);
// //             console.log(trackArray);
// //         } else {
// //             track.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
// //         }
// //     })
// // })

// // locationName.forEach(location => {
// //     search.addEventListener('click', function() {
// //         let locationSelect = document.getElementById("location-select").value;
// //         let locationValue = location.innerText;
// //         let locationCountry = locationValue.split(", ")[1];
// //         if (locationCountry === locationSelect) {
// //             locationArray.unshift(track.parentElement.parentElement.parentElement.parentElement);
// //         } else {
// //             location.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
// //         }
// //     })
// // })

// // search.addEventListener('click', locationFilter);
// // search.addEventListener('click', trackFilter);

// // function trackFilter() {
// //     trackName.forEach(track => {
// //         let userSelect = document.getElementById("user-select").value;
// //         let trackValue = track.innerText;
// //         if (trackValue === userSelect) {
// //             currentFilter.innerHTML = trackValue;
// //             track.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
// //         } else {
// //             track.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
// //         }
// //     })
// // }

// // function locationFilter() {
//     // locationName.forEach(location => {
//     //     let locationSelect = document.getElementById("location-select").value;
//     //     let locationValue = location.innerText;
//     //     let locationCountry = locationValue.split(", ")[1];
//     //     if (locationCountry === locationSelect) {
//     //         location.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
//     //     } else {
//     //         location.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
//     //     }
//     // })
// // }