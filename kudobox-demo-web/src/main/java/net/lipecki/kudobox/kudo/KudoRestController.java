package net.lipecki.kudobox.kudo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KudoRestController {

	private final List<Kudos> kudosRepository = new ArrayList<Kudos>();

	public KudoRestController() {
		kudosRepository.add(new Kudos("Zdzichu", "Grzegorz", "Wyśmienita prezentacja z Angular\'a!", new Date()));
		kudosRepository.add(new Kudos("Jacek", "Jarek", "Wyśmienicie zamawiasz pizze!", new Date()));
		kudosRepository.add(new Kudos("Kacper", "Franek", "Dobra partyjka SC2!", new Date()));
		kudosRepository.add(new Kudos("Lech", "Jan", "Gratki za udrożnienie webforms-functional-test!", new Date()));
	}

	@RequestMapping("/api/v1/addKudos")
	public void addKudos(@RequestBody final Kudos kudos) {
		kudosRepository.add(kudos);
	}

	@RequestMapping("/api/v1/kudos")
	public List<Kudos> getKudos() {
		return kudosRepository;
	}

}
