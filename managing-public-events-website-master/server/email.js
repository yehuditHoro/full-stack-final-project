var nodemailer = require('nodemailer');

function sendEmail(mail) {
    console.log("++++++++++++++++++++++++++++++++++++++++++")
    console.log("in sendEmail 2")
    console.log("++++++++++++++++++++++++++++++++++++++++++")
    console.log(mail);
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'showme@outlook.co.il',
            pass: 'tamar&yehudit'
        }
    });

    var mailOptions = {
        from: 'showme@outlook.co.il',
        to: 'showme@outlook.co.il',
        subject: 'New application from a user on the ShowMe website',
        text: mail.text,
        html: `<h1> from: ${mail.first_name}  ${mail.last_name}</h1> <br/> <h4>${mail.text}</h4/> `
    };
    console.log("++++++++++++++++++++++++++++++++++++++++++")
    console.log("out sendEmail 2")
    console.log("++++++++++++++++++++++++++++++++++++++++++")

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

// function sendCopyToUser(mail) {
//     console.log("++++++++++++++++++++++++++++++++++++++++++")
//     console.log("in sendCopy 2")
//     console.log("++++++++++++++++++++++++++++++++++++++++++")
//     console.log(mail);
//     var transporter = nodemailer.createTransport({
//         service: 'outlook',
//         auth: {
//             user: 'showme@outlook.co.il',
//             pass: 'tamar&yehudit'
//         }
//     });

//     var mailOptions = {
//         from: 'showme@outlook.co.il',
//         to: mail.email,
//         subject: 'copy:: your application was successfully send to showMe',
//         text: mail.text,
//         html: `<h1> hello ${mail.first_name}  ${mail.last_name}</h1>
//                <h2> This is a copy of your application in the showMe website</h2> 
//                <h3> response will come back soon...</h3>
//                <br/> <h4>${mail.text}</h4/> `
//     };
//     console.log("++++++++++++++++++++++++++++++++++++++++++")
//     console.log("out sendCopy 2")
//     console.log("++++++++++++++++++++++++++++++++++++++++++")

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }
module.exports = { sendEmail }