// ██╗  ██╗ █████╗ ███╗   ███╗    ███████╗ █████╗ ███╗   ██╗██████╗ ██╗    ██╗██╗ ██████╗██╗  ██╗
// ██║  ██║██╔══██╗████╗ ████║    ██╔════╝██╔══██╗████╗  ██║██╔══██╗██║    ██║██║██╔════╝██║  ██║
// ███████║███████║██╔████╔██║    ███████╗███████║██╔██╗ ██║██║  ██║██║ █╗ ██║██║██║     ███████║
// ██╔══██║██╔══██║██║╚██╔╝██║    ╚════██║██╔══██║██║╚██╗██║██║  ██║██║███╗██║██║██║     ██╔══██║
// ██║  ██║██║  ██║██║ ╚═╝ ██║    ███████║██║  ██║██║ ╚████║██████╔╝╚███╔███╔╝██║╚██████╗██║  ██║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝

(async () => {
    const { prompt } = require('enquirer')
    const axios = require('axios')

    const questions = require('./questions.json')

    const url = 'https://raw.githubusercontent.com/Ashton-Treleven/survey-demo/master/questions.json'

    const { data } = await axios.get(url)

    const answers = await prompt(data)
    console.log(answers)

})()
