const links = {
  github: 'afonsorenan',
  youtube: 'afonsorenan',
  facebook: 'afonsorenan',
  instagram: 'afonsorenan',
  twitter: 'afonsorenan'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
