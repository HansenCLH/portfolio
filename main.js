import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data(){
    return{
      skills: [
        {name: 'HTML5', level: '1 year', notes: ''},
        {name: 'CSS', level: '1 year', notes: ''},
        {name: 'JavaScript', level: '1 year', notes: ''},
        {name: 'React', level: '1 year', notes: ''},
        {name: 'Node.js', level: '1 year', notes: ''},
        {name: 'Express.js', level: '1 year', notes: ''},
        {name: 'Vue.js', level: '1 year', notes: ''},
        {name: 'MongoDB', level: '1 year', notes: ''},
        {name: 'RESTful APIs', level: '1 year', notes: ''},
        {name: 'SQL', level: '1 year', notes: ''},
        {name: 'German', level: 'Native Language', notes: ''},
        {name: 'Danish', level: '18 years', notes: ''}
      ],
      projects:[
        {projectName: '', projectDescription: '', image: ''}
      ] 
    }
  },
  methods: {
    displayWork(){
      
    }
  }
}).mount('#app')

