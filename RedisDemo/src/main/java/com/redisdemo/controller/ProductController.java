package com.redisdemo.controller;


import com.redisdemo.entity.Product;
import com.redisdemo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    public final ProductService productService;

    @GetMapping
//    @Cacheable(key = "#id",value = "Product")
    public Product findProductById(@RequestParam("id") Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @GetMapping("/fetch-all")
    public List<Product> findAllProduct() {
        return productService.getAllProduct();
    }

    @DeleteMapping
    public String deleteProductById(@RequestParam("id") Long id) {
        productService.deleteProductById(id);
        return "Product Deleted Successfully";
    }
}
