import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: string[] = ['frontend', 'backend', 'devops', 'database'/*, 'mobile'*/, 'tools'];
  skills: { [key: string]: string[] } = {
    'frontend': ['Angular'/*, 'React', 'Vue.js'*/, 'HTML', 'CSS', 'JavaScript'],
    'backend': ['java , java EE , Spring Boot', 'Node.js', ],
    'devops': ['Docker'/* 'Kubernetes', 'CI/CD', 'Jenkins', 'Ansible'*/],
    'database': ['MySQL', 'MongoDB', /*'PostgreSQL',*/ 'Oracle','SQL Server'],
/*
    'mobile': ['Flutter', 'React Native', 'Android', 'iOS'],
*/
      'tools': ['Git',/* 'Webpack', 'Babel', 'VS Code',*/ 'JIRA']
  };
  selectedCategory: string = this.skillCategories[0];
  selectedSkills: string[] = this.skills[this.selectedCategory];

  categoryIcons: { [key: string]: string } = {
    'frontend': 'fas fa-laptop-code',
    'backend': 'fas fa-server',
    'devops': 'fas fa-cogs',
    'database': 'fas fa-database',
    'mobile': 'fas fa-mobile-alt',
    'tools': 'fas fa-tools'
  };

  skillIcons: { [key: string]: string } = {
    'Angular': 'fab fa-angular icon-angular',
    'React': 'fab fa-react icon-react',
    'Vue.js': 'fab fa-vuejs icon-vuejs',
    'HTML': 'fab fa-html5 icon-html5',
    'CSS': 'fab fa-css3-alt icon-css3-alt',
    'JavaScript': 'fab fa-js icon-js',
    'java , java EE , Spring Boot': 'fas fa-leaf icon-spring',
    'Node.js': 'fab fa-node-js icon-node-js',
    'Laravel': 'fab fa-laravel icon-laravel',
    'Express.js': 'fas fa-code icon-express',
    'Django': 'fab fa-python icon-django',
    'Docker': 'fab fa-docker icon-docker',
    'Kubernetes': 'fas fa-box-open icon-kubernetes',
    'CI/CD': 'fas fa-robot icon-ci-cd',
    'Jenkins': 'fas fa-project-diagram icon-jenkins',
    'Ansible': 'fas fa-tools icon-ansible',
    'MySQL': 'fas fa-database icon-mysql',
    'MongoDB': 'fas fa-leaf icon-mongodb',
    'PostgreSQL': 'fas fa-database icon-postgresql',
    'Oracle': 'fas fa-database icon-oracle',
    'SQL Server':'fas fa-database icon-sql-server',
    'Firebase': 'fas fa-fire icon-firebase',
    'Flutter': 'fas fa-mobile-alt icon-flutter',
    'React Native': 'fab fa-react icon-react-native',
    'Android': 'fab fa-android icon-android',
    'iOS': 'fab fa-apple icon-ios',
    'Git': 'fab fa-git-alt icon-git',
    'Webpack': 'fas fa-cubes icon-webpack',
    'Babel': 'fas fa-code icon-babel',
    'VS Code': 'fas fa-code icon-vscode',
    'JIRA': 'fab fa-jira icon-jira',





  };

  skillColors: { [key: string]: string } = {
    'Angular': '#DD0031',
    'React': '#61DAFB',
    'Vue.js': '#42b883',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'JavaScript': '#F7DF1E',
    'java , java EE , Spring Boot': '#6DB33F',
    'Node.js': '#8CC84B',
    'Laravel': '#FF2D20',
    'Express.js': '#000000',
    'Django': '#092D43',
    'Docker': '#2496ED',
    'Kubernetes': '#326CE5',
    'CI/CD': '#1F77D4',
    'Jenkins': '#D5B62F',
    'Ansible': '#EE0000',
    'MySQL': '#00758F',
    'MongoDB': '#47A248',
    'PostgreSQL': '#336791',
    'Oracle': '#F80000',
    'Firebase': '#FFCA28',
    'Flutter': '#02569B',
    'React Native': '#61DAFB',
    'Android': '#3DDC84',
    'iOS': '#000000',
    'Git': '#F05032',
    'Webpack': '#8CC0DE',
    'Babel': '#F9DC3E',
    'VS Code': '#007ACC',
    'JIRA': '#0052CC'
  };

  setCategory(category: string) {
    this.selectedCategory = category;
    this.selectedSkills = this.skills[category];
  }

  getCardColor(skill: string): string {
    return this.skillColors[skill] || '#ffffff'; // Default to white if no color is defined
  }

  getIconClass(skill: string): string {
    return this.skillIcons[skill] || 'fas fa-question'; // Default icon if no skill icon is defined
  }
}
