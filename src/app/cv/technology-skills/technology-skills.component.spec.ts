import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySkillsComponent } from './technology-skills.component';

describe('TechnologySkillsComponent', () => {
  let component: TechnologySkillsComponent;
  let fixture: ComponentFixture<TechnologySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologySkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
