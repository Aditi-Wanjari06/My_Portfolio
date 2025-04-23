import portfolio from './portfolio.png'
import expense from './control.png'
import github from './components/Footer/github.png'
import todo from  "./to-do-list.png"

const projectData = [
    {
        "image": portfolio,
        'projectName': "Portfolio",
        "description": "A responsive portfolio developed using React and CSS to showcase projects, skills.",
        'link': github
    },
    {
        "image": todo,
        'projectName': "ToDo App",
        "description": "Developed an ToDo App based an Frontend. It helps users organize their daily tasks efficiently.",
        'link': github
    },
    {
        "image": expense,
        'projectName': "Expense Tracker",
        "description": "Built a full-stack web application using the MERN stack to help users track their income and expenses, also maintain their transaction.",
        'link': github
    }

]

export default projectData