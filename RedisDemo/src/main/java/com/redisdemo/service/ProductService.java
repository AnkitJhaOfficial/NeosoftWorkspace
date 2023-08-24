package com.redisdemo.service;

import com.redisdemo.entity.Product;
import com.redisdemo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    public final ProductRepository productRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Cacheable(key = "#id", value = "Product")
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    @Cacheable(value = "Product", key = "'Product'")
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @CachePut(key = "#id", value = "Product")
    public Product updateProductById(Long id, Product product) {
        product.setId(id);
        return productRepository.save(product);
    }

    @CacheEvict(key = "#id", value = "Product")
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

}
