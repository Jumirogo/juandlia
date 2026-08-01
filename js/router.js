import { HomePage } from "./pages/home.js";
import { JournalPage, initJournal } from "./pages/journal.js";
import { GalleryPage } from "./pages/gallery.js";
import { CalendarPage } from "./pages/calendar.js";
import { PlansPage } from "./pages/plans.js";
import { ReflectionsPage } from "./pages/reflections.js";
import { ActivitiesPage } from "./pages/activities.js";

const routes = {

    home:{
        page:HomePage
    },

    journal:{
        page:JournalPage,
        init:initJournal
    },

    gallery:{
        page:GalleryPage
    },

    calendar:{
        page:CalendarPage
    },

    plans:{
        page:PlansPage
    },

    reflections:{
        page:ReflectionsPage
    },

    activities:{
        page:ActivitiesPage
    }

};

export function navigate(page){

    const route=routes[page];

    document.getElementById("content").innerHTML=route.page();

    if(route.init){

        route.init();

    }

}