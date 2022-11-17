package hk.org.ha.cms.ipmoe.entity;

import lombok.Data;
import lombok.Getter;

import java.sql.Timestamp;
import java.io.Serializable;
import javax.persistence.*;

@Getter
@Data
@Entity
@Table(name = "new_orders")
public class NewOrders implements Serializable {
		static final long serialVersionUID = 1L;
		@Id
		@Column(name = "ord_no", nullable = false)
		private Integer ordNo;
	
		@Id
		@Column(name = "case_no", nullable = false)
		private String caseNo;
	
		@Id
		@Column(name = "pat_hospcode", nullable = false)
		private String patHospcode;
	
		@Column(name = "allow_modify", nullable = true)
		private String allowModify;
		@Column(name = "allow_post_comment", nullable = true)
		private String allowPostComment;
		@Column(name = "bed_no", nullable = true)
		private String bedNo;
	
	
		@Column(name = "discharge_reason", nullable = true)
		private String dischargeReason;
		@Column(name = "disp_hospcode", nullable = true)
		private String dispHospcode;
		@Column(name = "disp_ord_no", nullable = true)
		private Integer dispOrdNo;
		@Column(name = "disp_workstore", nullable = true)
		private String dispWorkstore;
		@Column(name = "eis_spec_code", nullable = true)
		private String eisSpecCode;
		@Column(name = "end_date", nullable = true)
		private Timestamp endDate;
		@Column(name = "hospcode", nullable = false)
		private String hospcode;
		@Column(name = "ipas_ward", nullable = false)
		private String ipasWard;
		@Column(name = "last_presc_type", nullable = true)
		private String lastPrescType;
		@Column(name = "last_upd_by", nullable = true)
		private String lastUpdBy;
		@Column(name = "last_upd_date", nullable = true)
		private Timestamp lastUpdDate;
		@Column(name = "max_item_no", nullable = true)
		private Integer maxItemNo;
		@Column(name = "mo_code", nullable = false)
		private String moCode;
		@Column(name = "moe_order", nullable = true)
		private String moeOrder;
		@Column(name = "ord_date", nullable = false)
		private Timestamp ordDate;
	
		@Column(name = "ord_status", nullable = false)
		private String ordStatus;
		@Column(name = "ord_subtype", nullable = true)
		private String ordSubtype;
		@Column(name = "ord_type", nullable = false)
		private String ordType;
	
		@Column(name = "phs_ward", nullable = true)
		private String phsWard;
		@Column(name = "presc_type", nullable = true)
		private String prescType;
		@Column(name = "prev_disp_date", nullable = true)
		private Timestamp prevDispDate;
		@Column(name = "prev_hospcode", nullable = true)
		private String prevHospcode;
		@Column(name = "prev_ord_no", nullable = true)
		private Integer prevOrdNo;
		@Column(name = "prev_ticknum", nullable = true)
		private String prevTicknum;
		@Column(name = "prev_workstore", nullable = true)
		private String prevWorkstore;
		@Column(name = "print_type", nullable = true)
		private String printType;
		@Column(name = "private_patient", nullable = true)
		private String privatePatient;
		@Column(name = "ref_no", nullable = false)
		private String refNo;
		@Column(name = "remark_confirm_by", nullable = true)
		private String remarkConfirmBy;
		@Column(name = "remark_confirm_date", nullable = true)
		private Timestamp remarkConfirmDate;
		@Column(name = "remark_create_by", nullable = true)
		private String remarkCreateBy;
		@Column(name = "remark_create_date", nullable = true)
		private Timestamp remarkCreateDate;
		@Column(name = "remark_status", nullable = true)
		private String remarkStatus;
		@Column(name = "remark_text", nullable = true)
		private String remarkText;
		@Column(name = "specialty", nullable = false)
		private String specialty;
		@Column(name = "src_specialty", nullable = true)
		private String srcSpecialty;
		@Column(name = "src_subspecialty", nullable = true)
		private String srcSubspecialty;
		@Column(name = "subspecialty", nullable = true)
		private String subspecialty;
		@Column(name = "suspend", nullable = true)
		private String suspend;
		@Column(name = "tickdate", nullable = true)
		private Timestamp tickdate;
		@Column(name = "ticknum", nullable = true)
		private String ticknum;
		@Column(name = "transfer_patient", nullable = true)
		private String transferPatient;
		@Column(name = "uncollect", nullable = true)
		private String uncollect;
		@Column(name = "wkstatcode", nullable = true)
		private String wkstatcode;
		@Column(name = "workstore", nullable = false)
		private String workstore;      
		//@Transient
		//private List<CorpIpMedProfile> corpIpMedProfileList;
	
}
