const template = {
    alert : (user, date, time, area) => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        </head>
        <body style="box-sizing: border-box;@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');margin: 0;font-family:'Roboto','Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans','Liberation Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'; 
        font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;background-color: #fff;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">
            <div style="box-sizing: border-box;width: 100%;padding-right: 0.75rem;padding-left: 0.75rem;margin-right: auto;margin-left: auto;">
                <div style="box-sizing: border-box;background-color: #212529!important;color: #fff!important;padding: 2rem 3rem    !important">
                    <h1>Windoor Security</h1>
                </div>
                <img style="box-sizing: border-box;width: 100%" src="https://i.ibb.co/8NGpPYC/alert.png" alt="logo"/>
                <div style="box-sizing: border-box;margin: 1.5rem !important;">
                    <h2 style="box-sizing: border-box;text-align: center!important; padding: 1.5rem !important;">ALERTAMIENTO</h2>
                    <p>Cordial Saludo, <b>${user}</b></p>
                    <p>Se ha generado una alerta por la apertura inesperada de la puerta principal</p>
                </div>
                <div style="box-sizing: border-box;padding: 0.5rem!important;background-color: rgb(235, 235, 235);">
                    <h2 style="box-sizing: border-box;padding: 1rem!important;text-align: center!important;">Tiempo de alertamiento</h2>
                    <div style="box-sizing: border-box;margin: 1rem!important;padding: 0.5rem!important;background-color: #fff">
                        <div style="box-sizing: border-box;margin: 2rem!important;margin-top: 1rem!important;" class="ms-5 mt-3">
                            <p style="box-sizing: border-box;font-weight: 700!important;display: inline-block">Cuando: </p><span> ${date} a las ${time}</span><br>
                            <p style="box-sizing: border-box;font-weight: 700!important;display: inline-block">Donde: </p><span> ${area}</span>
                        </div>
                        <div style="box-sizing: border-box;text-align: center!important;color: #842029;background-color: #f8d7da;border-color: #f5c2c7;position: relative;padding: 1rem 1rem;margin-bottom: 1rem;border: 1pxsolid transparent;border-radius: 0.25rem;">
                            <span>
                                Para mas información, revisar el historico desde tu aplicacion web
                            </span>    
                        </div>
                    </div>
                </div>
            </div>
            <footer style="box-sizing: border-box;background-color: rgb(218, 132, 51);background-color: rgb(218, 132, 51);color: #fff!important;text-align: center!important;padding: 1.5rem!important;    margin-top: 3rem!important;">
                <p style="box-sizing: border-box;margin: 0!important;">Derechos Reservados por Windoor Security</p>
                <p style="box-sizing: border-box;margin: 0!important;">Con el apoyo de la universidad Compensar</p>
                <p> Proyecto Semillero STEAM</p>
            </footer>
        </body>
        </html>`
    }
}

module.exports = template;