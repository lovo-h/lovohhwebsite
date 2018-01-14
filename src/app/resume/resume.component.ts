import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  collegeData = [
    {
      college: {
        name: 'University of Virginia',
        location: 'Charlottesville, VA',
        homeurl: 'http://www.virginia.edu/',
        logopath: '/assets/imgs/uva_logo.png'
      },
      graduations: [
        {
          date: 'May 2015',
          major: 'Bachelor of Science in Computer Science'
        }
      ]
    },
    {
      college: {
        name: 'Blue Ridge Community College',
        location: 'Weyers Cave, VA',
        homeurl: 'https://www.brcc.edu/',
        logopath: '/assets/imgs/brcc_logo.jpg'
      },
      graduations: [
        {
          date: 'May 2012',
          major: 'Associate of Arts and Sciences in Computer Science'
        },
        {
          date: 'May 2011',
          major: 'Associate of Applied Sciences in Information System Technologies'
        }
      ]
    }
  ];

  workExperienceData = [
    {
      company: {
        name: 'WillowTree Inc.',
        shortName: 'WillowTree Inc.',
        webUrl: 'https://willowtreeapps.com/',
        logopath: '/assets/imgs/wt_logo.jpg',
        location: 'Charlottesville, VA',
      },
      title: 'iOS Software Engineer',
      startDate: 'May 2015',
      endDate: 'Feb 2016',
      descriptionData: [
        'Used XCode, Objective-C / Swift to develop iOS apps and Github for code reviews',
        'Followed the Scrum Framework and participated in code-development meetings'
      ]
    },
    {
      company: {
        name: 'Critical Incident Analysis Group',
        shortName: 'CIAG',
        webUrl: 'https://med.virginia.edu/ciag/',
        logopath: '/assets/imgs/uvasom_logo.jpg',
        location: 'Charlottesville, VA',
      },
      title: 'Office / IT Assistant',
      startDate: 'Aug 2013',
      endDate: 'Jan 2014',
      descriptionData: [
        'Designed and coded a website for a national conference: Innovations in Policing',
        'Used Visual Basic to integrate new features into a MS Word app used to track info'
      ]
    },
    {
      company: {
        name: 'Blue Ridge Community College',
        shortName: 'BRCC',
        webUrl: 'https://www.brcc.edu/academics/academic-support/thecave/',
        logopath: '/assets/imgs/brcc_logo.jpg',
        location: 'Weyers Cave, VA',
      },
      title: 'Tutor / Teaching Assistant',
      startDate: 'Jan 2013',
      endDate: 'May 2013',
      descriptionData: [
        'Tutored: Computer Science, Web Development, and Math subjects',
        'Teacher-assisted Computer Science 202 in a class of about 20 students'
      ]
    },
    {
      company: {
        name: 'City Hall - Staunton',
        shortName: 'City Hall - Staunton',
        webUrl: 'https://www.ci.staunton.va.us/departments/information-technology',
        logopath: '/assets/imgs/staunton_logo.png',
        location: 'Staunton, VA',
      },
      title: 'Information Technology Intern',
      startDate: 'Jan 2011',
      endDate: 'Aug 2011',
      descriptionData: [
        'Researched, ordered, and configured 20 mini-computers designed for efficiency & low maintenance for Staunton’s Public Libraries',
        'Documented server information, configured servers, and helped patch security issues'
      ]
    },
  ];

  knowledgeData = [
    {
      topic: 'Programming Language',
      elements: [
        'C', 'C#', 'C++', 'GoLang', 'Java', 'JavaScript',
        'NodeJS', 'Objective-C', 'PHP', 'Python', 'SQL',
        'Swift', 'TypeScript', 'Visual Basic'
      ]
    },
    {
      topic: 'Markup',
      elements: [
        'CSS3', 'HTML5'
      ]
    },
    {
      topic: 'Framework',
      elements: [
        'Bootstrap', 'Django', 'Angular-CLI'
      ]
    },
    {
      topic: 'Tools',
      elements: [
        'AWS', 'CircleCI', 'Git', 'GoLand', 'Eclipse', 'PHPStorm', 'PyCharm',
        'SourceTree', 'Visual Studio', 'WebStorm', 'XCode'
      ]
    },
    {
      topic: 'OS',
      elements: [
        'Linux', 'Macintosh', 'Windows'
      ]
    }
  ];

  otherData = {
    clubs: [
      {
        name: 'STEM Club',
        location: 'Weyers Cave, VA',
        description: 'Created to provide students at Blue Ridge Community College with ' +
        'information and opportunities in the fields of Science, Technology, Engineering, ' +
        'and Mathematics',
        weburl: 'http://brccstemclub.com/',
        logopath: '/assets/imgs/stem_logo.png',
        participation: {
          title: 'Cofounder, Treasurer',
          startDate: '2012',
          endDate: '2013'
        }
      },
      {
        name: 'Alpha Beta Gamma',
        location: 'Weyers Cave, VA',
        description: 'Honor Society established by business professors in 1970 to recognize and ' +
        'encourage scholarship among Business and Professional Students Enrolled at Two-year ' +
        'Degree Granting Institutions',
        weburl: 'http://www.abg.org/',
        logopath: '/assets/imgs/abg_logo.gif',
        participation: {
          title: 'Member',
          startDate: '2010',
          endDate: '2013'
        }
      },
      {
        name: 'Phi Theta Kappa',
        location: 'Weyers Cave, VA',
        description: 'The world\'s largest and most prestigious honor society for two-year college students',
        weburl: 'https://www.ptk.org/',
        logopath: '/assets/imgs/ptk_logo.jpg',
        participation: {
          title: 'Member',
          startDate: '2009',
          endDate: '2013'
        }
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
