package com.entity.vo;

import com.entity.NongchanpinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 农产品
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-04-26 14:11:26
 */
public class NongchanpinVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 产品名称
	 */
	
	private String chanpinmingcheng;
		
	/**
	 * 产品分类
	 */
	
	private String chanpinfenlei;
		
	/**
	 * 产品介绍
	 */
	
	private String chanpinjieshao;
		
	/**
	 * 产品图片
	 */
	
	private String chanpintupian;
		
	/**
	 * 农户账号
	 */
	
	private String nonghuzhanghao;
		
	/**
	 * 农户姓名
	 */
	
	private String nonghuxingming;
		
	/**
	 * 联系方式
	 */
	
	private String lianxifangshi;
		
	/**
	 * 价格
	 */
	
	private Float price;
				
	
	/**
	 * 设置：产品名称
	 */
	 
	public void setChanpinmingcheng(String chanpinmingcheng) {
		this.chanpinmingcheng = chanpinmingcheng;
	}
	
	/**
	 * 获取：产品名称
	 */
	public String getChanpinmingcheng() {
		return chanpinmingcheng;
	}
				
	
	/**
	 * 设置：产品分类
	 */
	 
	public void setChanpinfenlei(String chanpinfenlei) {
		this.chanpinfenlei = chanpinfenlei;
	}
	
	/**
	 * 获取：产品分类
	 */
	public String getChanpinfenlei() {
		return chanpinfenlei;
	}
				
	
	/**
	 * 设置：产品介绍
	 */
	 
	public void setChanpinjieshao(String chanpinjieshao) {
		this.chanpinjieshao = chanpinjieshao;
	}
	
	/**
	 * 获取：产品介绍
	 */
	public String getChanpinjieshao() {
		return chanpinjieshao;
	}
				
	
	/**
	 * 设置：产品图片
	 */
	 
	public void setChanpintupian(String chanpintupian) {
		this.chanpintupian = chanpintupian;
	}
	
	/**
	 * 获取：产品图片
	 */
	public String getChanpintupian() {
		return chanpintupian;
	}
				
	
	/**
	 * 设置：农户账号
	 */
	 
	public void setNonghuzhanghao(String nonghuzhanghao) {
		this.nonghuzhanghao = nonghuzhanghao;
	}
	
	/**
	 * 获取：农户账号
	 */
	public String getNonghuzhanghao() {
		return nonghuzhanghao;
	}
				
	
	/**
	 * 设置：农户姓名
	 */
	 
	public void setNonghuxingming(String nonghuxingming) {
		this.nonghuxingming = nonghuxingming;
	}
	
	/**
	 * 获取：农户姓名
	 */
	public String getNonghuxingming() {
		return nonghuxingming;
	}
				
	
	/**
	 * 设置：联系方式
	 */
	 
	public void setLianxifangshi(String lianxifangshi) {
		this.lianxifangshi = lianxifangshi;
	}
	
	/**
	 * 获取：联系方式
	 */
	public String getLianxifangshi() {
		return lianxifangshi;
	}
				
	
	/**
	 * 设置：价格
	 */
	 
	public void setPrice(Float price) {
		this.price = price;
	}
	
	/**
	 * 获取：价格
	 */
	public Float getPrice() {
		return price;
	}
			
}
