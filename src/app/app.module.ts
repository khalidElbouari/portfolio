import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {NgOptimizedImage} from "@angular/common";
import { RoadmapComponent } from './roadmap/roadmap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {CvComponent} from "./cv/cv/cv.component";
import {EducationSectionComponent} from "./cv/education-section/education-section.component";
import {ExperienceSectionComponent} from "./cv/experience-section/experience-section.component";
import {InfoSectionComponent} from "./cv/info-section/info-section.component";
import {ProfileSectionComponent} from "./cv/profile-section/profile-section.component";
import {TechnologySkillsComponent} from "./cv/technology-skills/technology-skills.component";
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MarkdownModule } from 'ngx-markdown';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    RoadmapComponent,
    PageNotFoundComponent,
    ProjectDetailComponent,
    CvComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    InfoSectionComponent,
    ProfileSectionComponent,
    TechnologySkillsComponent,
    ChatbotComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
