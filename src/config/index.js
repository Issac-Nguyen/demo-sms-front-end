const mainColor = '#FF7165';
const whiteColor = '#FFF';
const borderColor = '#DBDCEE';
export default {
    App: {
        closeBtn: {
            border: `1px solid ${borderColor}`,
            fontWeight: 500
        },
        h3: {
            content: "Podaj kod PIN"
        },
        h4: {
            content: "Na podany numer telefonu wysłaliśmy SMS z kodem PIN"
        },
        InputList: {
            countItem: 4,
            InputItem: {
                width: '10%'
            },
            Input: {
                border: `1px solid ${borderColor}`,
                paddingTop: '1rem',
                paddingBottom: '1rem',
                rule: '^[0-9]+$'
            }
        },
        InvalidMsg: {
            width: '50%',
            backgroundColor: mainColor,
            color: whiteColor,
            marginTop: '1rem',
            marginBottom: '1rem',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        submitBtn: {
            backgroundColor: mainColor,
            color: whiteColor,
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            fontWeight: 600,
            content: 'Potwierdź'
        },
        footer: {
            content: 'Nie otrzymałeś kodu?',
            hightlight: {
                content: 'Wyślij ponownie',
                color: mainColor,
                fontWeight: 600
            }
            
        }
    }
}