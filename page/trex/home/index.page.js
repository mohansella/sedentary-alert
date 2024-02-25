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

  buildState() { //custom function

    const activityString = this.state.activityNeeded == 0 ? "-" : (this.state.activitySoFar + "/" + this.state.activityNeeded );

    const gui = new AutoGUI();
    const options = { align_h: align.CENTER_H };

    gui.spacer(); gui.newRow();
    const activeTargetTitle = gui.text("Activity Target", options); gui.newRow();
    const activeTargetValue = gui.text(activityString, options); gui.newRow();
    
    gui.spacer(); gui.newRow();

    const alertInTitle = gui.text("Alert In", options); gui.newRow();
    const alertInValue = gui.text("-", options); gui.newRow();
    
    gui.spacer(); gui.newRow();
    
    const lastActiveTitle = gui.text("Last Active", options); gui.newRow();
    const lastActiveValue = gui.text("-", options); gui.newRow();
    gui.spacer(); gui.newRow();
    
    
    gui.render();
  },

  build() {
    logger.debug('page build invoked');
    this.buildState();
  },
  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
