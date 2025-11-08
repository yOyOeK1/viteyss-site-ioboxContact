
import { createApp } from 'vue';
import IoBoxApp from './assets/ioBoxApp.vue';
import IoBoxGpio from './assets/ioBoxGpio.vue';
import IoBoxState from './assets/ioBoxState.vue';


class s_vysioboxContactPage{

  constructor(){
    this.ioApp = -1;
  }
  
  get getName(){
    return `Iobox Contact`;
  }
    
  
  get getDefaultBackgroundColor(){
    return "#ffffff";
  }
  
  getHtml = () => {

    return `<!--<b>${this.getName}</b><br>
    <img src="${this.homeUrl}assets/ico_viteyss_32.png"><br>
    This is a npm package<br>
    viteyss-site-ioboxContact<br>
    <pre>
    In Menu: ${this.getName}
    Home url: ${this.homeUrl}
    Ver: ${this.instanceOf.ver}

    More ditails in \`./site.json\`
    </pre>
    -->
    
    <div id="ioboxApp"></div>
    <br><br><br>
    `;

  }

  getHtmlAfterLoad = () =>{
    cl(`${this.getName} - getHtmlAfterLoad()`);
    this.ioApp = createApp(IoBoxApp,{thomeUrl: this.homeUrl});
    this.ioApp.component('iobox-gpio',IoBoxGpio);
    this.ioApp.component('iobox-gpio-state',IoBoxState);
    this.ioApp.mount('#ioboxApp');

  }

  get svgDyno(){
    return '';
  }

  svgDynoAfterLoad(){

  }

  onMessageCallBack = ( r ) => {
    //cl( `${this.getName} [cb] - got msg `+JSON.stringify(r,null,2));
    if( this.ioApp != -1 )
        this.ioApp._instance.ctx.newMessage(r);

  }

}

export { s_vysioboxContactPage };
