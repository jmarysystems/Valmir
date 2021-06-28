/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal(){ 
    
    try{
                                                
        if( document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value === "null" ){
                                                        
            //alert("1");
        }
        else{
                    
            //alert("2");        
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados();
        }
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados(){
            
    try{
                
        var tem_dados = false;
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("-") ){
                tem_dados = true;
                break;
            }
        }
                
        if( tem_dados === true ){
                                                                
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados();
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados(){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        var modificador = document.getElementById("divConteudo").innerHTML;
        setTimeout(function(){ 
        /* 
            document.getElementById("divConteudo").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        */
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");            
 
        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("-") ){
                
                //alert(linha_recebida[i]);
                var parametro_1 = "";
                var parametro_2 = "";
                var parametro_3 = "";                        
                var parametro_4 = "";
                var parametro_5 = "";
                var parametro_6 = "";
                
                var argumentos = linha_recebida[i].split("j");
                
                try{
                    
                    parametro_1 = argumentos[0];
                    parametro_2 = argumentos[1];
                    parametro_3 = argumentos[2];
                    parametro_4 = argumentos[3];
                    parametro_5 = argumentos[4];
                    parametro_6 = argumentos[5];

                }catch(Exception){}
                               
                $('#tabela > tbody:last').append(
                    '<tr>' + 
                        '<td>' + parametro_1.trim() + '</td>' + 
                        '<td>' + descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( parametro_2 ).trim() + '</td>' + 
                        '<td>' + descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( parametro_3 ).trim() + '</td>' + 
                        '<td>' + descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( parametro_4 ).trim() + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( parametro_5 ).trim() + '</td>' + 
                        '<td>' + descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( parametro_6 ).trim() + '</td>' + 
                    '</tr>'
                );

            }   
        }

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            //try{ _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(); }catch(Exception){} 
            
            //try{ _01_04_tabela_html_configuracoes_adicionar_eventos_a_todas_as_linhas(); }catch(Exception){} 
                        
        }, 1000);
        
        
        
        ////////////////////////////////////////////////////////////////////////////
        setTimeout(function(){ 
        //* 
            //document.getElementById("divConteudo").innerHTML = modificador;
        //*/
        }, 1000);
        ///////////////////////////////////////////////////////////////////////////
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////







function descriptografar_em_Numeros_Inteiros_Alfabeto_JM_Sem_Arroba( object1 ){
        
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "object1: " + object1 +
                                    "<br>" +
                                    "object1: " + object2;
        */                  
       
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>";
        */   
       
        var retorno = "";
    
        try{
            
            var argumento1 = object1.split("-");                                        
            for( var i = 0; i < argumento1.length; i++ ) {
                try{
                    var letra_unicode = String.fromCharCode( argumento1[i] );   
                    
                    if ( letra_unicode === undefined || letra_unicode === "" || letra_unicode === null){
    
                    }
                    else if ( argumento1[i] > 32 ){
                        
                        retorno += letra_unicode;
                    }
                    
                    /*
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                        document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                            "<br>" +
                            argumento1[i] + " - " + letra_unicode;
                    */
                }catch(Exception){}
            }
            
            /*
            var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +
                                    "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "letras1.length: " + letras1.length +
                                    "<br>" +
                                    "letras2.length: " + letras2.length +
                                    "<br>" +
                                    "numeros1: " + numeros1 +
                                    "<br>" +
                                    "letras1: " + letras1 +
                                    "<br>" +
                                    "numeros2: " + numeros2 +
                                    "<br>" +
                                    "letras2: " + letras2;
            */
            
        }catch(Exception){}
        
        return retorno;
    }