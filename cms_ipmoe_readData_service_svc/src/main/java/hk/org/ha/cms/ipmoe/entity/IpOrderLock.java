package hk.org.ha.cms.ipmoe.entity;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "IP_ORDER_LOCK")
public class IpOrderLock implements Serializable {
    static final long serialVersionUID = 100L;
    @Id
    @Column(name="pat_hospcode", nullable = false)
    private String patHospcode;

    @Id
    @Column(name="ord_no", nullable = false)
    private Integer ordNo;

    @Id
    @Column(name="case_no", nullable = false)
    private String caseNo;    

    @Column(name="status", nullable = true)
    private String status;

    @Column(name="create_by", nullable = true)
    private String createBy;

    @Column(name="create_dtm", nullable = true)
    private Timestamp createDtm;

    @Column(name="update_by", nullable = true)
    private String updateBy;

    @Column(name="update_dtm", nullable = true)
    private Timestamp updateDtm;

    @Column(name="wrk_stn_id", nullable = true)
    private String wrkStnId;    

    @Column(name="fn_name", nullable = true)
    private String fnName;

    //@Column(name="fullname", nullable = true)
    //private String fullname;
    
    @Column(name="wrk_stn_type", nullable = true)
    private String wrkStnType;  
    
    @Id
    @Column(name="patient_key", nullable = true)
    private String patientKey;



    //@Transient
    //private String expiryPeriodInSec;

}
