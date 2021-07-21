function navMenu(){
    const nav = document.createElement("nav")
    nav.role = 'navigation'
    const menuToggle = document.createElement("div")
    menuToggle.id = "menuToggle"
    nav.appendChild(menuToggle)
    menuToggle.innerHTML = `
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    `
    const ul = document.createElement("ul")
    ul.id = "menu"
    menuToggle.appendChild(ul)

    const cfcontainer = document.createElement("a")
    cfcontainer.id ="c-f"
    ul.appendChild(cfcontainer)
    
    const c= document.createElement("button")
    c.id ="c"
    c.textContent ="°C"
    const f = document.createElement("button")
    f.id = "f"
    f.textContent="°F"
    cfcontainer.appendChild(c)
    cfcontainer.appendChild(f)

    const menuTitles = ["Home", "About", "Github"]
   
    menuTitles.forEach(title=>{
        const a = document.createElement("a")
        a.href = title
        a.innerHTML = `<li>${title}</li>`
        ul.appendChild(a)
    })
  return nav
}

export{ navMenu }