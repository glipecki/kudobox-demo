package net.lipecki.kudobox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class KudoBox {

	public static void main(final String[] args) throws Exception {
		SpringApplication.run(KudoBox.class, args);
	}

}
