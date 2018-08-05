/*
 * Copyright (C) 2009-2018 Slava Semushin <slava.semushin@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
package ru.mystamps.web.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import static ru.mystamps.web.util.ControllerUtils.printHtml;

@Controller
public class TestController {
	
	@GetMapping("/test/valid/series-info/existing-seller")
	public void seriesInfoWithExistingSeller(HttpServletResponse response) throws IOException {
		printHtml(
			response,
			"<!DOCTYPE html>"
			+ "<html>"
				+ "<head>"
					+ "<title>Series info (existing seller)</title>"
				+ "</head>"
				+ "<body>"
					// CheckStyle: ignore LineLength for next 2 lines
					+ "Image:  <a id=\"series-image-link-1\" href=\"/image/1\">series image</a><br />"
					+ "Seller: <a id=\"test-seller\" href=\"http://example.com/eicca-toppinen\">Eicca Toppinen</a><br />"
					+ "Price:  <span id=\"test-price\">111</span> RUB<br />"
					// this is needed to simplify an integration test
					// (required fields "category" and "quantity" will be filled automatically)
					+ "Info:   <span class=\"dl-horizontal\">Спорт, 3 марки</span>"
				+ "</body>"
			+ "</html>"
		);
	}
	
	@GetMapping("/test/valid/series-info/new-seller")
	public void seriesInfoWithNewSeller(HttpServletResponse response) throws IOException {
		printHtml(
			response,
			"<!DOCTYPE html>"
			+ "<html>"
				+ "<head>"
					+ "<title>Series info (new seller)</title>"
				+ "</head>"
				+ "<body>"
					// CheckStyle: ignore LineLength for next 2 lines
					+ "Image:  <a id=\"series-image-link-1\" href=\"/image/1\">series image</a><br />"
					+ "Seller: <a id=\"test-seller\" href=\"http://example.com/lando-livianus\">Lando Livianus</a><br />"
					+ "Price:  <span id=\"test-price\">320.5</span> RUB<br />"
					// this is needed to simplify an integration test
					// (required fields "category" and "quantity" will be filled automatically)
					+ "Info:   <span class=\"dl-horizontal\">Спорт, 7 марок</span>"
				+ "</body>"
			+ "</html>"
		);
	}
	
	@GetMapping("/test/valid/series-info/catalog-numbers-in-description")
	public void seriesInfoWithCatalogNumbersInDescription(HttpServletResponse response)
		throws IOException {
		
		printHtml(
			response,
			"<!DOCTYPE html>"
			+ "<html>"
				+ "<head>"
					+ "<title>Series info (catalog numbers in description)</title>"
				+ "</head>"
				+ "<body>"
					+ "Image: <a id=\"series-image-link-1\" href=\"/image/1\">series image</a>"
					+ "<br />"
					+ "Info:  <span class=\"dl-horizontal\">Спорт, 17 марок, Mi# 2242-2246</span>"
				+ "</body>"
			+ "</html>"
		);
	}
	
}
