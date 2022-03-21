
setInterval(() => {
    let hour_hand = document.getElementById("hour");
    let minute_hand = document.getElementById("minute");
    let second_hand = document.getElementById("second");
    
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    
    let h_angle = `${30 * hour+minutes/2}`;
    let m_angle = `${6*minutes+second/10}`;
    let s_angle = `${6*second}`;
    console.log(h_angle)
    
      hour_hand.style.transform = `rotate(${h_angle}deg)`
      minute_hand.style.transform = `rotate(${m_angle}deg)`
      second_hand.style.transform = `rotate(${s_angle}deg)`
    
}, 1000);