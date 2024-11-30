import portfolio from './portfolio.png'
import expense from './control.png'
import attendence from './verification.png'
import github from './components/Footer/github.png'

const projectData = [
    {
        "image": attendence,
        'projectName': "Cyber Attend",
        "description": "Developed a MERN Stack based smart attendence system. The system records the live attendence using a GPS location.",
        'link': github
    },
    {
        "image": expense,
        'projectName': "Expense Tracker",
        "description": "Built a full-stack web application using the MERN stack to help users track their income and expenses, also maintain their transaction.",
        'link': github
    },
    {
        "image": portfolio,
        'projectName': "Portfolio",
        "description": "A responsive portfolio developed using React and CSS to showcase projects, skills.",
        'link': github
    }
]

export default projectData