import { log as Logger } from '@zos/utils';
import AutoGUI from '@silver-zepp/autogui';
import { getSedentaryState, humanizeWithNow } from '../../../utils';

const logger = Logger.getLogger("SedentaryAlert");
Page({
  
  state: {
    sedentary: null
  },

  onInit() {
    logger.debug("page onInit invoked");
    this.state.sedentary = getSedentaryState();
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },

  build() {
    logger.debug('page build invoked');
    this.buildState();
  },

  buildState() { //custom function

    const sedentaryState = this.state.sedentary;
    const activityProgressStr = sedentaryState.activityNeeded == 0 ? "-" : (sedentaryState.activitySoFar + "/" + sedentaryState.activityNeeded );
    const lastActiveStr = sedentaryState.lastActive == 0 ? "-" : humanizeWithNow(sedentaryState.lastActive);
    const alertInStr = sedentaryState.alertIn == 0 ? "-" : humanizeWithNow(sedentaryState.alertIn);
    
    const gui = new AutoGUI();
    const titleOptions = { text_size: 25 };
    const valueOptions = { text_size: 20, color: 0xcccccc };

    gui.spacer(); gui.newRow();
    const activeTargetTitle = gui.text("Activity Target", titleOptions); gui.newRow();
    const activeTargetValue = gui.text(activityProgressStr, valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();

    const alertInTitle = gui.text("Alert In", titleOptions); gui.newRow();
    const alertInValue = gui.text(alertInStr, valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();
    
    const lastActiveTitle = gui.text("Last Active", titleOptions); gui.newRow();
    const lastActiveValue = gui.text(lastActiveStr, valueOptions); gui.newRow();
    gui.spacer(); gui.newRow();
    
    gui.render();
  },

});
