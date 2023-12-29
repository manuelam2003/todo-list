import {format} from "date-fns"
import Project from "./Project";
import Task from "./Task";

export default class UI {
    static createHeader() {
        const header = document.createElement("header");
        header.classList.add("header");
    
        const divLogo = document.createElement("div");
        divLogo.classList.add("logo");
    
        const pageName = document.createElement("h1");
        pageName.textContent = "Todo List"
        pageName.classList.add("page-name");
    
        divLogo.appendChild(pageName);
        header.appendChild(divLogo);
    
        return header;
    }
    
    static createMain() {
        const main = document.createElement("main");
        main.classList.add("main");
        main.setAttribute("id", "main");
    
        const nav = document.createElement("nav");
        nav.classList.add("nav");
        nav.setAttribute("id", "nav");
        main.appendChild(nav);
    
        const projectPreview = document.createElement("div");
        projectPreview.classList.add("project-preview");
        projectPreview.setAttribute("id", "project-preview");
        main.appendChild(projectPreview);
    
        return main;
    }
    
    static createFooter() {
        const footer = document.createElement("footer");
        footer.classList.add("footer");
    
        const copyright = document.createElement("p");
        copyright.textContent = `Copyright © ${new Date().getFullYear()} malvarez`;
    
        const githubLink = document.createElement("a");
        githubLink.href = "https://github.com/manuelam2003";
    
        const githubIcon = document.createElement("i");
        githubIcon.classList.add("fab");
        githubIcon.classList.add("fa-github");
    
        githubLink.appendChild(githubIcon);
        footer.appendChild(copyright);
        footer.appendChild(githubLink);
    
        return footer;
    }
    
    static initializeWebsite() {
        const content = document.getElementById("content");
    
        content.appendChild(UI.createHeader());
        content.appendChild(UI.createMain());
        content.appendChild(UI.createFooter());
    }
}