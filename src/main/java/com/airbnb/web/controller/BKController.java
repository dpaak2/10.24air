package com.airbnb.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.command.Command;
import com.airbnb.web.domain.Board;
import com.airbnb.web.domain.Member;
import com.airbnb.web.mapper.BKMapper;
import com.airbnb.web.service.IDeleteService;
import com.airbnb.web.service.IGetService;
import com.airbnb.web.service.IPostService;
import com.airbnb.web.service.IPutService;

@RestController
public class BKController {
	private static final Logger logger = LoggerFactory.getLogger(BKController.class);
	@Autowired Member mem;
	@Autowired BKMapper mapper;
	

	@RequestMapping(value = "/get/login", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> put(@RequestBody Member mem) {
		logger.info("BKController::::: BKController {}", "컨트롤러진입");
		System.out.println("id : " + mem.getMemberId() + "비번 : " + mem.getMemberPassword());
		Map<String, Object> map = new HashMap<>();
		Command cmd = new Command();
		cmd.setAction(mem.getMemberId());
		cmd.setColumn(mem.getMemberPassword());
		String result;
		Member m = (Member) new IGetService() {

			@Override
			public Object execute(Object o) {
				// TODO Auto-generated method stub
				return mapper.selectOne(cmd);
			}
		}.execute(cmd);

		if (m == null) {
			result = "fail";
		} else {
			result = "success";
		}
        map.put("user", m.getMemberId());
		map.put("list", m);
		map.put("msg", result);
		System.out.println("통신후" + m.toString());
		return map;
	}
	@RequestMapping(value = "/get/insert", method = RequestMethod.POST)
	public @ResponseBody void insert(@RequestBody Member mem) {
		logger.info("BKController::::: insert {}", "인서트");
		Map<String, Object> map = new HashMap<>();
		System.out.println("email : " + mem.getMemberId() + "비번 : " + mem.getMemberPassword());
		System.out.println("이름 : " + mem.getName() + "생일 : " + mem.getbirthdate());
		Command cmd = new Command();
		cmd.setAction(mem.getMemberId());
		cmd.setDir(mem.getName());
		cmd.setPageNumber(mem.getbirthdate());
		cmd.setColumn(mem.getMemberPassword());
			new IPostService() {  
			@Override
			public void execute(Object o) {
				mapper.insert(cmd);
			}
		}.execute(cmd);
	}
	@RequestMapping(value = "/get/search", method = RequestMethod.POST)
	public @ResponseBody Map<?, ?> search(@RequestBody Member mem) {
		logger.info("BKController::::: 서치!!!! {}", "컨트롤러진입");
		System.out.println("id : " + mem.getMemberId());
		Map<String, Object> map = new HashMap<>();
		Command cmd = new Command();
		cmd.setAction(mem.getMemberId());
		String result;
		Member m = (Member) new IGetService() {

			@Override
			public Object execute(Object o) {
				// TODO Auto-generated method stub
				return mapper.selectSearch(cmd);
			}
		}.execute(cmd);

		if (m == null) {
			result = "success";
		} else {
			result = "fail";
		}
       
		
		map.put("msg", result);
		

		return map;
	}
	@RequestMapping(value="/get/update" ,method = RequestMethod.POST)
	public @ResponseBody void update(@RequestBody Member mem){
		logger.info("BKController::::: 업데이트!!! {}", "컨트롤러진입");
		System.out.println("id : " + mem.getMemberId());
		Command cmd = new Command();
		cmd.setAction(mem.getMemberId());
		String a=mem.getbirthdate()+mem.getName();
		cmd.setColumn(a);
		Map<String, Object> map = new HashMap<>();
		System.out.println("aaaaaaaaa"+a);
		new IPutService() {
			
			@Override
			public void execute(Object o) {
			mapper.update(cmd);
			}
			
		}.execute(cmd);
		
	}
		
	@RequestMapping(value="/get/delete" ,method = RequestMethod.POST)
	public @ResponseBody void delete(@RequestBody Member mem){
		logger.info("BKController::::: 탈퇴!!! {}", "컨트롤러진입");
		System.out.println("id : " + mem.getMemberId());
		Command cmd = new Command();
		cmd.setAction(mem.getMemberId());
		new IDeleteService() {
			@Override
			public void execute(Object o) {
			mapper.delete(cmd);// TODO Auto-generated method stub
		 }
		}.execute(cmd);
	}
		
	
}
