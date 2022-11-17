package hk.org.ha.cms.moe.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QNewOrders is a Querydsl query type for NewOrders
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QNewOrders extends EntityPathBase<NewOrders> {

    private static final long serialVersionUID = 1379201450L;

    public static final QNewOrders newOrders = new QNewOrders("newOrders");

    public final StringPath allowModify = createString("allowModify");

    public final StringPath allowPostComment = createString("allowPostComment");

    public final StringPath bedNo = createString("bedNo");

    public final StringPath caseNo = createString("caseNo");

    public final StringPath dischargeReason = createString("dischargeReason");

    public final StringPath dispHospcode = createString("dispHospcode");

    public final NumberPath<Integer> dispOrdNo = createNumber("dispOrdNo", Integer.class);

    public final StringPath dispWorkstore = createString("dispWorkstore");

    public final StringPath eisSpecCode = createString("eisSpecCode");

    public final DateTimePath<java.sql.Timestamp> endDate = createDateTime("endDate", java.sql.Timestamp.class);

    public final StringPath hospcode = createString("hospcode");

    public final StringPath ipasWard = createString("ipasWard");

    public final StringPath lastPrescType = createString("lastPrescType");

    public final StringPath lastUpdBy = createString("lastUpdBy");

    public final DateTimePath<java.sql.Timestamp> lastUpdDate = createDateTime("lastUpdDate", java.sql.Timestamp.class);

    public final NumberPath<Integer> maxItemNo = createNumber("maxItemNo", Integer.class);

    public final StringPath moCode = createString("moCode");

    public final StringPath moeOrder = createString("moeOrder");

    public final DateTimePath<java.sql.Timestamp> ordDate = createDateTime("ordDate", java.sql.Timestamp.class);

    public final NumberPath<Integer> ordNo = createNumber("ordNo", Integer.class);

    public final StringPath ordStatus = createString("ordStatus");

    public final StringPath ordSubtype = createString("ordSubtype");

    public final StringPath ordType = createString("ordType");

    public final StringPath patHospcode = createString("patHospcode");

    public final StringPath phsWard = createString("phsWard");

    public final StringPath prescType = createString("prescType");

    public final DateTimePath<java.sql.Timestamp> prevDispDate = createDateTime("prevDispDate", java.sql.Timestamp.class);

    public final StringPath prevHospcode = createString("prevHospcode");

    public final NumberPath<Integer> prevOrdNo = createNumber("prevOrdNo", Integer.class);

    public final StringPath prevTicknum = createString("prevTicknum");

    public final StringPath prevWorkstore = createString("prevWorkstore");

    public final StringPath printType = createString("printType");

    public final StringPath privatePatient = createString("privatePatient");

    public final StringPath refNo = createString("refNo");

    public final StringPath remarkConfirmBy = createString("remarkConfirmBy");

    public final DateTimePath<java.sql.Timestamp> remarkConfirmDate = createDateTime("remarkConfirmDate", java.sql.Timestamp.class);

    public final StringPath remarkCreateBy = createString("remarkCreateBy");

    public final DateTimePath<java.sql.Timestamp> remarkCreateDate = createDateTime("remarkCreateDate", java.sql.Timestamp.class);

    public final StringPath remarkStatus = createString("remarkStatus");

    public final StringPath remarkText = createString("remarkText");

    public final StringPath specialty = createString("specialty");

    public final StringPath srcSpecialty = createString("srcSpecialty");

    public final StringPath srcSubspecialty = createString("srcSubspecialty");

    public final StringPath subspecialty = createString("subspecialty");

    public final StringPath suspend = createString("suspend");

    public final DateTimePath<java.sql.Timestamp> tickdate = createDateTime("tickdate", java.sql.Timestamp.class);

    public final StringPath ticknum = createString("ticknum");

    public final StringPath transferPatient = createString("transferPatient");

    public final StringPath uncollect = createString("uncollect");

    public final StringPath wkstatcode = createString("wkstatcode");

    public final StringPath workstore = createString("workstore");

    public QNewOrders(String variable) {
        super(NewOrders.class, forVariable(variable));
    }

    public QNewOrders(Path<? extends NewOrders> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNewOrders(PathMetadata metadata) {
        super(NewOrders.class, metadata);
    }

}

