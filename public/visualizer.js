var chart = ''

const loadChart = (_labels, _data)=>
{
    //Referencia al canvas
    var ctx = document.getElementById("myChart").getContext("2d");
    //Gráfica
    chart = new Chart(ctx, {
        //Tipo de gráfica
        type: "line",
        //datos del datasets
        data:{
            labels: _labels,
            datasets: [
                {
                    label:'Battery',
                    backgroundColor: "rgb(255,255,255,0.8)",
                    borderColor: "rgb(255,255,255,0.8)",
                    data: _data
                }
            ]
        },
        //Configuración
        options: {}
    });
};