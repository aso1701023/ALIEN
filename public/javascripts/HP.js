const room = document.getElementById("room");
const roomId = document.getElementById("roomid");
(async () => {
  console.log("test");
  document.getElementById("roomid").value = await sha256(Math.random().toString(36).slice(-8));
})();  
if(room != null&&room != ""){
  const room_make = document.addEventListener('click',() => { 
    (async () => {
      console.log("test");
      let hashID = await sha256(room);
      document.getElementById("roomid").value = hashID;
    })();  
    return;
  })
}

//ハッシュ関数
async function sha256(str) {
    // Convert string to ArrayBuffer
    const buff = new Uint8Array([].map.call(str, (c) => c.charCodeAt(0))).buffer;
    // Calculate digest
    const digest = await crypto.subtle.digest('SHA-256', buff);
    // Convert ArrayBuffer to hex string
    // (from: https://stackoverflow.com/a/40031979)
    let hash = [].map.call(new Uint8Array(digest), x => ('00' + x.toString(16)).slice(-2)).join('');
    console.log(hash)
    return hash
  }