        // <!-- <div class="card">
        //     <div class="count">1</div>
        //     <div class="thumbnail">
        //         <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" alt="">
        //         <span class="timestamp">31:20</span>
        //     </div>
        //     <div class="info">
        //         <div class="title">
        //             Introduction to Backend | Sigma Web Dev video #2
        //         </div>
        //         <div class="otherinfo">
        //             <div class="cName">CodeWithHarry</div>*
        //             <div class="views">560K</div>*
        //             <div class="monthsOld">7 months old</div>
        //         </div>
        //     </div>
        // </div> -->
let c=1;
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    function V(v) {
        if(v<1000){
            return v.toString();
        }
        else if(v<1000000){
            return (v/1000).toString()+"K";
        }
        else if(v<1000000000){
            return (v/1000000).toString()+"M";
        }
    }
    let card = document.createElement('div');
    let count = document.createElement('div');
    let thumbNail = document.createElement('div');
    let image = document.createElement('img');
    let timestamp = document.createElement('span');
    let info = document.createElement('div');
    let Title = document.createElement('div');
    let otherinfo = document.createElement('div');
    let Cname = document.createElement('div');
    let Views = document.createElement('div');
    let Monthsold = document.createElement('div');
    card.className="card";
    count.className="count";
    thumbNail.className="thumbnail";
    image.setAttribute("src",thumbnail);
    timestamp.className="timestamp";
    info.className="info";
    Title.className="title";
    otherinfo.className="otherinfo";
    count.innerHTML=c;
    timestamp.innerHTML=duration;
    Title.innerHTML=title;
    Cname.innerHTML=cName + " | ";
    Views.innerHTML= V(views) + " | ";
    Monthsold.innerHTML=monthsOld.toString()+" months ago";
    document.querySelector(".container").append(card);
    document.getElementsByClassName("card")[c-1].append(count);
    document.getElementsByClassName("card")[c-1].append(thumbNail);
    document.getElementsByClassName("card")[c-1].querySelector(".thumbnail").append(image);
    document.getElementsByClassName("card")[c-1].querySelector(".thumbnail").append(timestamp);
    document.getElementsByClassName("card")[c-1].append(info);
    document.getElementsByClassName("card")[c-1].querySelector(".info").append(Title);
    document.getElementsByClassName("card")[c-1].querySelector(".info").append(otherinfo);
    document.getElementsByClassName("card")[c-1].querySelector(".otherinfo").append(Cname);
    document.getElementsByClassName("card")[c-1].querySelector(".otherinfo").append(Views);
    document.getElementsByClassName("card")[c-1].querySelector(".otherinfo").append(Monthsold);
    c++;
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
let button = document.getElementById("btn");
button.addEventListener("click",()=>{createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")});
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
