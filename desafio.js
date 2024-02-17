const listaPesquisa = [];
let resposta;

do {
    resposta = Number(prompt("Qual o melhor Sistema Operacional para uso em servidores?\n1- Windows Server\n2- Unix\n3- Linux\n4- Netware\n5- Mac OS\n6- Outro\n7- Encerrar Pesquisa"));

    if(resposta === 1 || resposta === 2 || resposta === 3 || resposta === 4 || resposta === 5 || resposta === 6) {
        listaPesquisa.push(resposta);
    } else if (resposta === 7) {
        let WindowsServer = 0;
        let Unix = 0;
        let Linux = 0;
        let Netware = 0;
        let MacOS = 0;
        let Outro = 0;

        for (let i = 0; i < listaPesquisa.length; i++) {
            switch (listaPesquisa[i]) {
                case 1:
                    WindowsServer++;
                    break;
                case 2:
                    Unix++;
                    break;
                case 3:
                    Linux++;
                    break;
                case 4:
                    Netware++;
                    break;
                case 5:
                    MacOS++;
                    break;
                case 6:
                    Outro++;
                    break;
            }
        }

        console.log(`Resultados da pesquisa:\nWindows Server: ${WindowsServer}\nUnix: ${Unix}\nLinux: ${Linux}\nNetware: ${Netware}\nMac OS: ${MacOS}\nOutro: ${Outro}`);
    } else {
        alert("Valor Inválido");
    }
} while (resposta !== 7);
