package hk.org.ha.cms.ipmoe;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.util.TimeZone;


@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        System.getProperties().put( "server.port", 8181 );  //8181 port is set here
        SpringApplication.run(Application.class, args);
    }
    @Bean
    public JPAQueryFactory jpaQueryFactory(EntityManager entityManager){
        return new JPAQueryFactory(entityManager);
    }

    @PostConstruct
    public void init(){
        // Setting Spring Boot SetTimeZone
        TimeZone.setDefault(TimeZone.getTimeZone("GMT+8"));
    }
}