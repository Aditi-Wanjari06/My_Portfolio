import portfolio from './portfolio.png'
import expense from './control.png'
import github from './components/Footer/github.png'
// import todo from  "./to-do-list.png"
import lms from "./e-learning.png"

const projectData = [
    {
        "image": lms,
        'projectName': "CMS",
        "description": "A role-based Course Management Systems built with MERN stack featuring dashboards, quizzes, and progress trackin",
        'link': github,
        'go': 'https://github.com/Aditi-Wanjari06/Course-Management-System'
    },
    {
        "image": portfolio,
        'projectName': "Portfolio",
        "description": "A responsive portfolio developed using React and CSS to showcase projects, skills.",
        'link': github,
        'go': 'https://github.com/Aditi-Wanjari06/My_Portfolio'
    },
    // {
    //     "image": todo,
    //     'projectName': "ToDo App",
    //     "description": "Developed an ToDo App based an Frontend. It helps users organize their daily tasks efficiently.",
    //     'link': github,
    //     'go': 'https://github.com/Aditi-Wanjari06/Todo-app-using-react'

    // },
    {
        "image": expense,
        'projectName': "Expense Tracker",
        "description": "Built a full-stack web application using the MERN stack to help users track their income and expenses, also maintain their transaction.",
        'link': github,
        'go':'https://github.com/Aditi-Wanjari06/Expense-Tracker'
    }

]

export default projectData