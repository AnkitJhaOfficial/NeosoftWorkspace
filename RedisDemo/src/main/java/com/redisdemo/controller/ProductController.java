package com.redisdemo.controller;


import com.redisdemo.entity.Product;
import com.redisdemo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @GetMapping("/fetch-all")
    public List<Product> findAllProduct() {
        return productService.getAllProduct();
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product) {
        return productService.updateProductById(id, product);
    }

    @DeleteMapping
    public String deleteProductById(@RequestParam("id") Long id) {
        productService.deleteProductById(id);
        return "Product Deleted Successfully";
    }
}
