
function suggestActivity() {
  const mood = document.getElementById("mood-select").value;
  const suggestionBox = document.getElementById("suggestion");
  const iconBox = document.getElementById("icon");

  const suggestions = {
    happy: {
      text: "Keep spreading the joy! Try writing a gratitude list.",
      link: "https://www.happify.com/hd/what-gratitude-does/",
      icon: "😊"
    },
    sad: {
      text: "Watch your favorite comfort movie or try this meditation.",
      link: "https://www.youtube.com/watch?v=inpok4MKVLM",
      icon: "😢"
    },
    stressed: {
      text: "Try this 10-minute meditation to calm your mind.",
      link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
      icon: "😫"
    },
    bored: {
      text: "Learn something new or watch a fun video.",
      link: "https://www.youtube.com/watch?v=QjFhU-3pE2M",
      icon: "😐"
    },
    angry: {
      text: "Try breathing exercises or journaling your thoughts.",
      link: "https://www.healthline.com/health/mental-health/anger-management-strategies",
      icon: "😠"
    }
  };

  if (mood && suggestions[mood]) {
    const { text, link, icon } = suggestions[mood];
    suggestionBox.innerHTML = `${text}<br><a href="${link}" target="_blank">Check this out</a>`;
    iconBox.textContent = icon;
  } else {
    suggestionBox.textContent = "Please choose a mood first.";
    iconBox.textContent = "";
  }
}

function changeTheme() {
  const mood = document.getElementById("mood-select").value;
  const body = document.body;
  const themes = {
    happy: "#fff4c2",
    sad: "#d0e7f9",
    stressed: "#f9d5d3",
    bored: "#f0f0f0",
    angry: "#fbdede"
  };

  body.style.backgroundColor = themes[mood] || "#f0f4f8";
}
