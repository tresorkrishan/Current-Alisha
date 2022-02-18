// useEffect(() => {
//     if (typeof phoneNumberInput !== 'undefined' && phoneNumberInput !== '') {
//         validateNumber(phoneNumberInput, 'voice').then(result => {
//             if (result === 'Error') {
//                 setCheckNumber(true);
//             }
//             else {
//                 if (result === 'Not valid') {
//                     setPhoneNumberInput('');
//                     setCheckNumber(true);
//                     // greetings('Please enter a valid phone number please?', 3, 'number').then(result => {
//                     //     type = 'number';
//                     //     setShowVideo(false);
//                     //     setAmplitude(0);
//                     //     setShowListening(true);
//                     //     setShowListeningIcon(true);
//                     //     startRecognizing();
//                     // });
//                 }
//                 else {
//                     setPhoneNumber(phoneNumberInput);
//                     setPhoneNumberInput('');
//                     setCheckNumber(false);
//                 };
//             };
//         });
//     };
// }, [phoneNumberInput]);

// useEffect(() => {
//     if (typeof phoneNumber !== 'undefined') {
//         console.log('44444')
//         validateNumber(phoneNumber, 'manual').then(result => {
//             if (typeof result.message !== 'undefined' && result.message === 'valid') {
//                 setCheckNumber(false);
//                 getUserInfo(phoneNumber).then(result => {
//                     if (result === 'Not Found') {
//                         if (!micPressed1 && !voiceDone) {
//                             console.log('here')
//                             greetings('Please say your name', 3, 'name').then(result => {
//                                 type = 'name';
//                                 setShowVideo(false);
//                                 setAmplitude(0);
//                                 setShowListening(true);
//                                 // setShowListeningIcon(true);
//                                 startRecognizing();
//                             });
//                         };
//                     }
//                     else {
//                         setOldUser(true);
//                         setName(result.data[0].Name);
//                         setEmail(result.data[0].Email);
//                         setVoiceDone(true);
//                         greetings(`Welcome back ${result.data[0].Name}. Which product would you like to service today?`, 5).then(result => {
//                             type = 'product';
//                             setShowVideo(false);
//                             setVoiceDone(true);
//                             setAmplitude(0);
//                             setShowListening(true);
//                             setShowListeningIcon(true);
//                             startRecognizing();
//                         });
//                     };
//                 });
//             }
//             else if (typeof result.message !== 'undefined' && result.message === 'invalid') {
//                 setCheckNumber(true);
//             }
//             else {
//                 if (!micPressed1 && !voiceDone) {
//                     setCheckNumber(true);
//                     greetings('This is not a valid phone number, please speak again', 4, 'number').then(result => {
//                         type = 'number';
//                         setShowVideo(false);
//                         setAmplitude(0);
//                         setShowListening(true);
//                         setShowListeningIcon(true);
//                         recognition.start();
//                     });
//                 }
//                 else {
//                     setCheckNumber(true);
//                 };
//             };
//         });
//     };
// }, [phoneNumber]);
