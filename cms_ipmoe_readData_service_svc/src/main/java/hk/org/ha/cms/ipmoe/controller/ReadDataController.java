package hk.org.ha.cms.ipmoe.controller;

import hk.org.ha.cms.ipmoe.dataService.ReadDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.ArrayList;
import java.util.List;
@Validated
@RestController
public class ReadDataController {

    @Autowired
    ReadDataService readDataService;

   /* @Als(showReturnResult = false)
    @PostMapping("/getReadDataService")
    public R<List<RequestEnquiryVO>> getRequestEnquiryByFilter(@RequestBody @Valid FilterQueryDTO filter) {
        List<RequestEnquiryVO> requestEnquiryList = requestService.getRequestEnquiryByFilter(filter);
        return R.success(requestEnquiryList);
    }

    @Als(showReturnResult = false)
    @PostMapping("/getReadDataService")
    public R<List<RequestEnquiryVO>> getRequestEnquiryByFilter(@RequestBody @Valid FilterQueryDTO filter) {
        List<RequestEnquiryVO> requestEnquiryList = requestService.getRequestEnquiryByFilter(filter);
        return R.success(requestEnquiryList);
        
    }*/
}