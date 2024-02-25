import { align } from '@zos/ui';
import { log as Logger } from '@zos/utils';
import AutoGUI from '@silver-zepp/autogui';

const logger = Logger.getLogger("SedentaryAlert");
Page({
  
  state: {
    activitySoFar: 0, //steps count
    activityNeeded: 100, //steps count
    lastActive: 0,  //UTC timestamp
    alertIn: 0, //UTC timestamp
  },

  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },

  build() {
    logger.debug('page build invoked');
    this.buildState();
  },
  
  buildState() { //custom function

    const activityString = this.state.activityNeeded == 0 ? "-" : (this.state.activitySoFar + "/" + this.state.activityNeeded );

    const gui = new AutoGUI();
    const titleOptions = { text_size: 25 };
    const valueOptions = { text_size: 20, color: 0xcccccc };

    gui.spacer(); gui.newRow();
    const activeTargetTitle = gui.text("Activity Target", titleOptions); gui.newRow();
    const activeTargetValue = gui.text(activityString, valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();

    const alertInTitle = gui.text("Alert In", titleOptions); gui.newRow();
    const alertInValue = gui.text("-", valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();
    
    const lastActiveTitle = gui.text("Last Active", titleOptions); gui.newRow();
    const lastActiveValue = gui.text("-", valueOptions); gui.newRow();
    gui.spacer(); gui.newRow();
    
    gui.render();
  },

});
