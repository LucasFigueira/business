import React from 'react' 
import './SobreNos.css' 
export default props =>
 <React.Fragment>
 <div className="sobrenos">
<h2 class="sobre-nos">EQUIPE</h2>
   <div className="container">
  
      <div className="row dives">
      <div className="col s12 m12 l6" >
  
      <div className="icon-servicee">
            <img src="foto1.png" className="abc"/>
            
      </div>
      <span className="nome">Lucas Figueira </span>    
      <span class="cargo">Web Developer</span>              
      <ul class="social">
                                	<li><a href="javascript:;" onclick="alert('Meu usuário do Skype é: ');return false;" title="Skype"><i class="fa fa-skype"></i></a></li>
                                	<li><a href=" " target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                	<li><a href=" " target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>                          
 
      </div>

      <div className="col s12 m12 l6" >
 
      <div className="icon-servicee">
            <img src="foto1.png" className="abc"/>
            </div>
 
      </div>
 
      <span className="nome">Thales Lopes </span>    
      <span class="cargo">Web Developer</span>               
      <ul class="social">
                                	<li><a href="javascript:;" onclick="alert('Meu usuário do Skype é: ');return false;" title="Skype"><i class="fa fa-skype"></i></a></li>
                                	<li><a href=" " target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                	<li><a href=" " target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>  
      
      </div>

      <div className="row">
            <div className="col s12">
                  <p className="sobrenos-desc">Somos dois desenvolvedores, com aproximadamente três anos de experiência em desenvolvimento web.
                     Nossa carreira profissional e nosso portfólio foram construídos em empresas privadas do distrito federal.
                     <br></br><br></br>
                     Garantimos o desenvolvimento do seu produto com qualidade aliado as melhores práticas de desenvolvimento de software.
                  </p>

            </div> 
      </div>
   </div>
      
</div> 
  
</React.Fragment>