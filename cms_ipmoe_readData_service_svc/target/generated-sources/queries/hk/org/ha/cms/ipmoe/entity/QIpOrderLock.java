package hk.org.ha.cms.ipmoe.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QIpOrderLock is a Querydsl query type for IpOrderLock
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QIpOrderLock extends EntityPathBase<IpOrderLock> {

    private static final long serialVersionUID = 858254494L;

    public static final QIpOrderLock ipOrderLock = new QIpOrderLock("ipOrderLock");

    public final StringPath caseNo = createString("caseNo");

    public final StringPath createBy = createString("createBy");

    public final DateTimePath<java.sql.Timestamp> createDtm = createDateTime("createDtm", java.sql.Timestamp.class);

    public final StringPath fnName = createString("fnName");

    public final NumberPath<Integer> ordNo = createNumber("ordNo", Integer.class);

    public final StringPath patHospcode = createString("patHospcode");

    public final StringPath patientKey = createString("patientKey");

    public final StringPath status = createString("status");

    public final StringPath updateBy = createString("updateBy");

    public final DateTimePath<java.sql.Timestamp> updateDtm = createDateTime("updateDtm", java.sql.Timestamp.class);

    public final StringPath wrkStnId = createString("wrkStnId");

    public final StringPath wrkStnType = createString("wrkStnType");

    public QIpOrderLock(String variable) {
        super(IpOrderLock.class, forVariable(variable));
    }

    public QIpOrderLock(Path<? extends IpOrderLock> path) {
        super(path.getType(), path.getMetadata());
    }

    public QIpOrderLock(PathMetadata metadata) {
        super(IpOrderLock.class, metadata);
    }

}

