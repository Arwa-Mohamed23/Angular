import { Component } from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectComponent} from './project/project.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, AboutMeComponent, SkillsComponent, ProjectComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
