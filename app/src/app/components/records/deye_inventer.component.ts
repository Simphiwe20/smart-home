// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-deye_inventer',
  templateUrl: './deye_inventer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class deye_inventerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_chm0BJcruh5vBF5F(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_chm0BJcruh5vBF5F(bh) {
    try {
      bh = this.sd_EKjDCHew7Zo5hveu(bh);
      //appendnew_next_sd_chm0BJcruh5vBF5F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_chm0BJcruh5vBF5F');
    }
  }

  //appendnew_flow_deye_inventerComponent_start

  sd_EKjDCHew7Zo5hveu(bh) {
    try {
      //appendnew_next_sd_EKjDCHew7Zo5hveu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EKjDCHew7Zo5hveu');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_deye_inventerComponent_Catch
}
