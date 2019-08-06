import React from 'react' 
import './SobreNos.css' 
export default props =>
 <React.Fragment>
 <div className="sobrenos">
<h2 class="dark-text sobre-nos">Quem Somos</h2>
   <div className="container">
  
      <div className="row">
      <div className="col s12 m6 l6" >
  
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

      <div className="col s12 m6 l6" >
 
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

   </div>

</div> 
  
</React.Fragment>